import axios from 'axios'
import styled from '@emotion/styled'
import Link from 'next/link'

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

const url = process.env.NEXT_PUBLIC_BASE_URL

export async function getStaticProps() {
  const { data: cars } = await axios.get(url + '/cars')
  return {
    props: { cars }
  }
}

const clientUrl = 'http://localhost:8000'

const Cars = ({ cars }) => {
  return (
    <>
      <SearchBox>
        <select id='make' name='make'></select>
      </SearchBox>
      <Grid>
        {cars &&
          cars.map(car => (
            <Link
              href={encodeURI(
                `${clientUrl}/cars/${car.make.toLowerCase()}/${car.model.toLowerCase()}/${car.id.toString()}`
              )}
            >
              <a>
                <Card key={car.id}>
                  <img src={`${url}${car.photo.url}`} />
                  <h2>
                    {car.make} / {car.model}
                  </h2>
                  <h3>
                    {car.year} / {car.kilometers} miles
                  </h3>
                  {car.tags &&
                    car.tags.map(tag => (
                      <Badge
                        style={{ background: tag.color }}
                      >
                        {tag.value}
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
