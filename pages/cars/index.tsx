import styled from '@emotion/styled'
import Link from 'next/link'
import openDB from '../../openDB'
import getMakes from 'database/getMakes'

const SearchBox = styled.div`
  display: grid;
  width: 200px;
  grid-template-columns: repeat(2, 1fr);
`

const Grid = styled.div`
  display: grid;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  justify-items: center;
  margin-top: 30px;
  background: #e0e0e0;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  width: 1000px;
`

const Card = styled.div`
  width: 300px;
  border: 1px solid #9e9e9e;
  background: #eeeeee;
  :hover {
    box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.5;
  }
  img {
    width: 300px;
  }
  h2 {
    text-overflow: ellipsis;
    width: 300px;
  }
  h4 {
    color: #eeeeee;
  }
  h3 {
    color: black;
  }
`

const Badge = styled.span`
  width: 80px;
  border-radius: 8px;
  text-align: center;
  display: inline-block;
  margin-right: 10px;
`

export async function getStaticProps() {
  const makes = await getMakes()
  const db = await openDB()
  const cars = await db.all(
    'select car.id, car.make, car.model, car.year, car.fuelType, car.kilometers, car.details, car.price, car.photoUrl, group_concat(sellPoint) as tags, group_concat(hex) as colors from car join car_tag on car.id=car_tag.car_id join tag on car_tag.tag_id=tag.id group by car.id'
  )
  cars.forEach((car, idx, tags) => {
    const slogans = car.tags.split(',')
    const bgs = car.colors.split(',')
    car.badges = []
    for (let i = 0; i < slogans.length; i++) {
      car.badges.push({
        id: i + 1,
        color: bgs[i],
        tag: slogans[i]
      })
    }
  })

  console.log(cars)

  return {
    props: { cars, makes }
  }
}

// const url = 'http://localhost:8000'

const Cars = ({ cars, makes }) => {
  return (
    <>
      <SearchBox>
        <select id='make' name='make'>
          <option value='all'>All Makes</option>
          {makes &&
            makes.map(make => (
              <option value={make.make}>
                {make.make}({make.count})
              </option>
            ))}
        </select>
        <select id='model' name='model'>
          <option value='model'>Model</option>
        </select>
        <select id='minPrice' name='minPrice'>
          <option value='minPrice'>MinPrice</option>
        </select>
        <select id='maxPrice' name='maxPrice'>
          <option value='maxPrice'>MaxPrice</option>
        </select>
      </SearchBox>
      <Grid>
        {cars &&
          cars.map(car => (
            <Link
              href={encodeURI(
                `/cars/${car.make.toLowerCase()}/${car.model.toLowerCase()}/${
                  car.id
                }`
              )}
            >
              <a>
                <Card key={car.id}>
                  <img src={`${car.photoUrl}`} />
                  <h2>
                    {car.make} / {car.model}
                  </h2>
                  <h3>
                    {car.year} / {car.kilometers} miles
                  </h3>
                  {car.badges &&
                    car.badges.map(tag => (
                      <Badge
                        style={{ background: tag.color }}
                      >
                        {tag.tag}
                      </Badge>
                    ))}
                  <h2>{car.price}</h2>
                </Card>
              </a>
            </Link>
          ))}
      </Grid>
    </>
  )
}

export default Cars
