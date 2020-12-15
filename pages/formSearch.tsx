import router, { useRouter } from 'next/router'
import styles from 'users.module.css'
import ReactPaginate from 'react-paginate'
import openDB from 'openDB'

export default function FormSearch({
  paginatedModels,
  totalPage
}) {
  const { query } = useRouter()
  const handlePageClick = page => {
    router.push({
      pathname: router.pathname,
      query: { ...query, page: page.selected + 1 }
    })
  }
  return (
    <>
      <ReactPaginate
        pageClassName={styles.a}
        containerClassName={styles.container}
        pageCount={totalPage}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
      />
      <pre>{JSON.stringify(paginatedModels, null, 4)}</pre>
    </>
  )
}

export async function getServerSideProps(cxt) {
  const make = getStrValue(cxt.query.make)
  const model = getStrValue(cxt.query.model)
  const minPrice = getNumValue(cxt.query.minPrice)
  const maxPrice = getNumValue(cxt.query.maxPrice)
  const modelsPerPage =
    getNumValue(cxt.query.modelsPerPage) || 4
  const page = getNumValue(cxt.query.page)
  const offset = (page - 1) * modelsPerPage

  const db = await openDB()
  const dbParams = {
    '@make': make,
    '@model': model,
    '@minPrice': minPrice,
    '@maxPrice': maxPrice
  }

  const models = await db.get(
    'SELECT model, COUNT(*) AS count FROM car WHERE (@make IS NULL OR make = @make) AND (@model IS NULL OR model = @model) AND (@minPrice IS NULL OR @minPrice <= price) AND (@maxPrice IS NULL OR @maxPrice >= price)',
    dbParams
  )
  const paginatedModels = await db.all(
    'SELECT * FROM car WHERE (@make IS NULL OR make = @make) AND (@model IS NULL OR model = @model) AND (@minPrice IS NULL OR @minPrice <= price) AND (@maxPrice IS NULL OR @maxPrice >= price) LIMIT @modelsPerPage OFFSET @offset',
    {
      ...dbParams,
      '@modelsPerPage': modelsPerPage,
      '@offset': offset
    }
  )

  const totalPage = Math.ceil(models.count / modelsPerPage)
  return {
    props: { paginatedModels, totalPage }
  }
}

function getStrValue(value) {
  if (!value || value === 'all') {
    return null
  }
  return value
}

function getNumValue(value) {
  const number = parseInt(value)
  return isNaN(number) ? null : number
}
