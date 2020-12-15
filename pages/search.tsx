import router, { useRouter } from 'next/router'
import styles from 'users.module.css'
import ReactPaginate from 'react-paginate'
import PaginationItem from '@material-ui/lab/PaginationItem'
import Link from 'next/link'
import getMakes from '../database/getMakes'
import getModels from '../database/getModels'
import getPaginatedCars from '../database/getPaginatedcars'
import Search from './cars/index'
import Pagination from '@material-ui/lab/Pagination'
import { useState } from 'react'

export default function filteredCarsList({
  models,
  makes,
  paginatedCars,
  totalPages
}) {
  const { query } = useRouter()

  const handlePageClick = page => {
    const path = router.pathname
    query.page = page.selected + 1
    router.push({
      pathname: path,
      query
    })
  }

  return (
    <>
      <Pagination
        count={totalPages}
        siblingCount={1}
        boundaryCount={1}
        renderItem={item => {
          console.log(item)
          return (
            <PaginationItem
              component={PaginationLink}
              query={query}
              item={item}
              {...item}
            />
          )
        }}
      />

      <ReactPaginate
        marginPagesDisplayed={1}
        pageClassName={styles.li}
        containerClassName={styles.container}
        pageLinkClassName={styles.a}
        previousLinkClassName={styles.prev_a}
        nextLinkClassName={styles.next_li_a}
        nextClassName={styles.next_li}
        breakLinkClassName={styles.break_a}
        previousLabel='Prev'
        onPageChange={handlePageClick}
        nextLabel='NEXT'
        breakLabel='...'
        activeLinkClassName={styles.a_active}
        // activeClassName={styles.active}
        disabledClassName={styles.disabled}
        pageCount={totalPages}
        // pageRangeDisplayed='3'
        pageRangeDisplayed={3}
      />

      <Search
        cars={paginatedCars}
        makes={makes}
        models={models}
      />
    </>
  )
}

export async function getServerSideProps(cxt) {
  const make = cxt.query.make
  const [makes, models, pagination] = await Promise.all([
    getMakes(),
    getModels(make),
    getPaginatedCars(cxt.query)
  ])
  return {
    props: {
      makes,
      models,
      paginatedCars: pagination.paginatedCars,
      totalPages: pagination.totalPages
    }
  }
}

export function PaginationLink({ item, query, ...props }) {
  return (
    <Link
      href={{
        pathname: '/search',
        query: { ...query, page: item.page }
      }}
      shallow
    >
      <a {...props}></a>
    </Link>
  )
}

export function getAsString(value) {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}
