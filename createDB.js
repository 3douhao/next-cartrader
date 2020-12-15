const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

const createDB = async () => {
  const db = await sqlite.open({
    filename: './mydb.db',
    driver: sqlite3.Database
  })
  await db.migrate()
}

createDB()
