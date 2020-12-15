import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import openDB from '../../openDB'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body
    const db = await openDB()
    const { password: hashedPassword } = await db.get(
      'select password from user where email = ?',
      email
    )
    compare(password, hashedPassword, (err, result) => {
      if (!err && result) {
        jwt.sign({ email }, 'secret', (err, token) => {
          console.log(token)
          res.status(200).json(token)
        })
      } else {
        res.json(err)
      }
    })
  } else {
    res.json({ message: 'sorry, only post allowed!' })
  }
}

export const config = {
  api: {
    externalResolver: true
  }
}
