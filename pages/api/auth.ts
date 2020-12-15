import { hash } from 'bcrypt'
import router from 'next/router'
import openDB from '../../openDB'

export default async (req, res) => {
  const { method } = req
  if (method === 'POST') {
    const db = await openDB()
    const { email, password } = req.body
    hash(password, 10, async (err, hash) => {
      if (!err && hash) {
        await db.run('insert into user values(?, ?)', [
          email,
          hash
        ])
        res.json({ message: 'ok' })
      } else {
        res.json(err)
      }
    })
  } else {
    res.status(405).json({ message: 'only post allowed' })
  }
}
export const config = {
  api: {
    externalResolver: true
  }
}
