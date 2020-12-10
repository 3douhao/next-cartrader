import openDB from '../openDB'

const getModels = async make => {
  const db = await openDB()
  const models = await db.all(
    'select model, count(*) as count from car where make=? group by model',
    make
  )
  return models
}

export default getModels
