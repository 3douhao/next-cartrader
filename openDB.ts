import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

const openDB = async () => {
  const db = await open({
    filename: 'mydb.db',
    driver: sqlite3.Database
  })
  return db
}

export default openDB
