import axios from 'axios'
import styled from '@emotion/styled'

const Card = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 40% 40%;
  margin: auto;
  justify-items: center;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
  margin-top: 30px;
  padding: 50px;
  img {
    display: inline-block;
  }
  aside {
  }
`

const url = process.env.NEXT_PUBLIC_BASE_URL

export async function getStaticPaths() {
  const { data: cars } = await axios.get(url + '/cars')
  const paths = cars.map(car => ({
    params: {
      make: encodeURI(car.make.toLowerCase()),
      model: encodeURI(car.model.toLowerCase()),
      id: car.id.toString()
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const { data: car } = await axios.get(`${url}/cars/${id}`)
  return {
    props: { car }
  }
}

const CarDetails = ({ car }) => {
  return (
    <Card>
      <img src={`${url}${car.photo.url}`} />
      <aside>
        <h2>
          {car.make}-{car.model}
        </h2>
        <h3>
          {car.year} / {car.kilometers}
        </h3>
        <h2>{car.price}</h2>
        <p>{car.details}</p>
      </aside>
    </Card>
  )
}

export default CarDetails
