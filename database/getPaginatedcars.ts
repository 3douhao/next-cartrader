import openDB from 'openDB'
import getModels from 'database/getModels'

function getStrValue(str) {
  return !str || str === 'all' ? null : str
}

function getNumValue(str) {
  const number = parseInt(str)
  return isNaN(number) ? null : number
}

export default async function getPaginatedCars(query) {
  const db = await openDB()

  const page = query.page || 1
  const carsPerPage = query.carsPerPage || 4
  const offset = (page - 1) * carsPerPage
  const mainQuery = `WHERE (@make IS NULL OR @make = make)
AND (@model IS NULL OR @model = model)
AND (@minPrice IS NULL OR @minPrice <= price)
AND (@maxPrice IS NULL OR @maxPrice >= price)
`
  const dbParams = {
    '@make': getStrValue(query.make),
    '@model': getStrValue(query.model),
    '@minPrice': getNumValue(query.minPrice),
    '@maxPrice': getNumValue(query.maxPrice)
  }
  const totalCarsPromise = db.get(
    `
SELECT COUNT(*) as count FROM car ${mainQuery}
`,
    dbParams
  )

  const paginatedCarsPromise = db.all(
    `
SELECT * FROM car ${mainQuery}
LIMIT @carsPerPage OFFSET @offset
`,
    {
      ...dbParams,
      '@carsPerPage': carsPerPage,
      '@offset': offset
    }
  )

  const [paginatedCars, totalCars] = await Promise.all([
    paginatedCarsPromise,
    totalCarsPromise
  ])

  const totalPages = Math.ceil(
    totalCars.count / carsPerPage
  )
  return { paginatedCars, totalPages }
}
