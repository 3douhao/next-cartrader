import getModels from 'database/getModels'

export default async function models(req, res) {
  const make = req.query.make
  const models = await getModels(make)
  res.json(models)
}
