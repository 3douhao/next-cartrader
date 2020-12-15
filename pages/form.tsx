import openDB from 'openDB'
import useSWR from 'swr'
import getMakes from 'database/getMakes'
import { Formik, Form, Field, useField } from 'formik'
import router, { useRouter } from 'next/router'
import getModels from 'database/getModels'

const prices = [5000, 10000, 15000, 20000, 25000]

const onSubmit = values => {
  router.push({
    pathname: '/formSearch',
    query: { ...values, page: 1 }
  })
}

const SearchForm = ({ makes, models }) => {
  const { query } = useRouter()

  const initialValues = {
    make: query.make || 'all',
    model: query.model || 'all',
    minPrice: query.minPrice || 'all',
    maxPrice: query.maxPrice || 'all'
  }

  const SelectField = ({ make, models, ...props }) => {
    const [field] = useField({ name: props.name })
    const { data } = useSWR('/api/models?make=' + make)
    const newData = data || models
    return (
      <select {...props} {...field}>
        <option value='all'>All Models</option>
        {newData &&
          newData.map(model => (
            <option key={model.model} value={model.model}>
              {model.model}({model.count})
            </option>
          ))}
      </select>
    )
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form
          style={{
            display: 'grid',
            width: '50%',
            margin: 'auto'
          }}
        >
          <Field name='make' as='select'>
            <option value='all'>All Makes</option>
            {makes &&
              makes.map(make => (
                <option key={make.make} value={make.make}>
                  {make.make}({make.count})
                </option>
              ))}
          </Field>
          <SelectField
            name='model'
            models={models}
            make={values.make}
          />
          <Field name='minPrice' as='select'>
            <option value='all'>Min Price</option>
            {prices &&
              prices.map(price => (
                <option value={price} key={price}>
                  {price}
                </option>
              ))}
          </Field>
          <Field name='maxPrice' as='select'>
            <option value='all'>Max Price</option>
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
  )
}

export async function getServerSideProps() {
  const db = await openDB()
  const makes = await getMakes()
  const models = await db.all(
    'select model, count(*) as count from car group by model'
  )
  return {
    props: { makes, models }
  }
}

export default SearchForm
