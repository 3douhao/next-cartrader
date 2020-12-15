import styled from '@emotion/styled'
import useSWR from 'swr'
import getModels from 'database/getModels'
import Link from 'next/link'
import openDB from '../../openDB'
import getMakes from 'database/getMakes'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField
} from 'formik'
import * as Yup from 'yup'
import router, { useRouter } from 'next/router'

const SearchBox = styled.div`
  Form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 500px;
    margin: auto;
    button {
      // grid-column-start: 1;
      // grid-column-end: 3;
      // grid-column: 1 / 3;
      // grid-column: 1 / span 2;
      grid-column: span 2;
    }
  }
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
    // box-shadow: 2px 4px 6px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 5px 10px #ccc;
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

export async function getServerSideProps(context) {
  const make = context.query.make
  const [makes, models] = await Promise.all([
    getMakes(),
    getModels(make)
  ])
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

  return {
    props: { cars, makes, models }
  }
}

const prices = [
  500,
  1000,
  5000,
  15000,
  25000,
  50000,
  250000
]

export default function Search({ cars, makes, models }) {
  const { query } = useRouter()
  const initialValues = {
    make: query.make || 'all',
    model: query.model || 'all',
    minPrice: query.minPrice || 'all',
    maxPrice: query.maxPrice || 'all'
  }

  const ModelSelect = ({ make, models, ...props }) => {
    const [field] = useField({
      name: props.name
    })

    const { data } = useSWR('/api/models?make=' + make, {
      dedupingInterval: 60000
    })
    const newModels = data || models

    return (
      <select {...field} {...props}>
        <option value='all'>All Models</option>
        {newModels &&
          newModels.map(model => (
            <option value={model.model} key={model.model}>
              {model.model}({model.count})
            </option>
          ))}
      </select>
    )
  }
  return (
    <>
      <SearchBox>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            router.push({
              pathname: '/search',
              query: { ...values, page: 1 }
            })
          }}
        >
          {({ values }) => (
            <Form>
              <Field as='select' name='make'>
                <option value='all'>All Makes</option>
                {makes &&
                  makes.map(make => (
                    <option
                      value={make.make}
                      key={make.make}
                    >
                      {make.make}({make.count})
                    </option>
                  ))}
              </Field>
              <ModelSelect
                make={values.make}
                name='model'
                models={models}
              />
              <Field as='select' name='minPrice'>
                <option value='all'>No Min</option>
                {prices &&
                  prices.map(price => (
                    <option value={price} key={price}>
                      {price}
                    </option>
                  ))}
              </Field>
              <Field as='select' name='maxPrice'>
                <option value='all'>No Max</option>
                {prices &&
                  prices.map(price => (
                    <option value={price} key={price}>
                      {price}
                    </option>
                  ))}
              </Field>
              <button type='submit'>Search</button>
            </Form>
          )}
        </Formik>
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
                        key={tag.color}
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

// const Cars = ({ cars, makes, models }) => {
//   const { query } = useRouter()
//   const initialValues = {
//     make: query.make || 'all',
//     model: query.model || 'all',
//     minPrice: query.minPrice || 'all',
//     maxPrice: query.maxPrice || 'all'
//   }

//   const ModelSelect = ({ make, models, ...props }) => {
//     const [field] = useField({
//       name: props.name
//     })

//     const { data } = useSWR('/api/models?make=' + make)
//     const newModels = data || models

//     return (
//       <select {...field} {...props}>
//         <option value='all'>All Models</option>
//         {newModels &&
//           newModels.map(model => (
//             <option value={model.model} key={model.model}>
//               {model.model}({model.count})
//             </option>
//           ))}
//       </select>
//     )
//   }
//   return (
//     <>
//       <SearchBox>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={values => {
//             router.push({
//               pathname: '/search',
//               query: { ...values, page: 1 }
//             })
//           }}
//         >
//           {({ values }) => (
//             <Form>
//               <Field as='select' name='make'>
//                 <option value='all'>All Makes</option>
//                 {makes &&
//                   makes.map(make => (
//                     <option
//                       value={make.make}
//                       key={make.make}
//                     >
//                       {make.make}({make.count})
//                     </option>
//                   ))}
//               </Field>
//               <ModelSelect
//                 make={values.make}
//                 name='model'
//                 models={models}
//               />
//               <Field as='select' name='minPrice'>
//                 <option value='all'>No Min</option>
//                 {prices &&
//                   prices.map(price => (
//                     <option value={price} key={price}>
//                       {price}
//                     </option>
//                   ))}
//               </Field>
//               <Field as='select' name='maxPrice'>
//                 <option value='all'>No Max</option>
//                 {prices &&
//                   prices.map(price => (
//                     <option value={price} key={price}>
//                       {price}
//                     </option>
//                   ))}
//               </Field>
//               <button type='submit'>Search</button>
//             </Form>
//           )}
//         </Formik>
//       </SearchBox>
//       <Grid>
//         {cars &&
//           cars.map(car => (
//             <Link
//               href={encodeURI(
//                 `/cars/${car.make.toLowerCase()}/${car.model.toLowerCase()}/${
//                   car.id
//                 }`
//               )}
//             >
//               <a>
//                 <Card key={car.id}>
//                   <img src={`${car.photoUrl}`} />
//                   <h2>
//                     {car.make} / {car.model}
//                   </h2>
//                   <h3>
//                     {car.year} / {car.kilometers} miles
//                   </h3>
//                   {car.badges &&
//                     car.badges.map(tag => (
//                       <Badge
//                         style={{ background: tag.color }}
//                         key={tag.color}
//                       >
//                         {tag.tag}
//                       </Badge>
//                     ))}
//                   <h2>{car.price}</h2>
//                 </Card>
//               </a>
//             </Link>
//           ))}
//       </Grid>
//     </>
//   )
// }

// export default Cars
