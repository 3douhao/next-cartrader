import openDB from '../openDB'

const getMakes = async () => {
  const db = await openDB()
  const makes = await db.all(
    'select make, count(*) as count from car group by make'
  )
  return makes
}

export default getMakes
