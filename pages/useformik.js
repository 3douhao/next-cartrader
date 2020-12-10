import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const initialValues = {
  firstName: '',
  lastName: '',
  email: ''
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('even a fake name will do')
    .min(3, '3 is the smallest number of chars here')
    .max(10, 'should be less 10'),
  lastName: Yup.string()
    .required('it is a must')
    .min(5, 'at lease 5 characters')
    .max(20, 'at most 20 chars'),
  email: Yup.string()
    .email('you hav to put in a correct email address')
    .required('got to fill in an email address')
})

const onSubmit = (values, { setSubmitting }) => {
  console.log('value', values)
  setSubmitting(false)
}

const formStyle = {
  display: 'grid',
  fontSize: '1rem',
  width: '50%',
  margin: 'auto',
  gridTemplateColumns: '1fr',
  gridGap: '5px'
}

export default function MyForm () {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {/* render props used to get access to 'formik' */}
      {formik => (
        <Form style={formStyle}>
          <label htmlFor='firstName'>First Name</label>
          <Field name='firstName' placeholder='first name here' />
          <ErrorMessage
            component='span'
            name='firstName'
            style={{ color: 'hotpink' }}
          />
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' placeholder='last name here' />
          <ErrorMessage name='lastName' />
          <label htmlFor='email'>Email</label>
          <Field name='email' placeholder='example@example.com' />
          <ErrorMessage name='email' />
          <button type='submit' disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}
