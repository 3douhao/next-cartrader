import ReactPaginate from 'react-paginate'
import styles from 'users.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function PostsPage() {
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    console.log(posts)
    setPosts(posts)
  }, [])

  return (
    <>
      <ReactPaginate
        marginPagesDisplayed={1}
        pageClassName={styles.li}
        containerClassName={styles.container}
        pageLinkClassName={styles.a}
        previousLinkClassName={styles.prev_a}
        nextLinkClassName={styles.next_li_a}
        nextClassName={styles.next_li}
        breakLinkClassName={styles.break_a}
        previousLabel='<'
        nextLabel='NEXT'
        breakLabel='...'
        activeLinkClassName={styles.a_active}
        // activeClassName={styles.active}
        disabledClassName={styles.disabled}
        pageCount={10}
        // pageRangeDisplayed='3'
        pageRangeDisplayed={3}
      />
      <ul>
        {posts &&
          posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </>
  )
}
