const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

const createDB = async () => {
  const db = await sqlite.open({
    filename: './mydb.db',
    driver: sqlite3.Database
  })
  await db.migrate()

  // const tag = await db.all('select * from tag')
  // // console.log('all tags', JSON.stringify(tag, null, 4))
  // // const carTag = await db.all('select * from car_tag')
  // console.log('all car-tags', JSON.stringify(carTag, null, 4))
}

createDB()
