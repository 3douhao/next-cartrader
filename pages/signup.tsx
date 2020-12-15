import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import router from 'next/router'
import * as Yup from 'yup'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  width: 50%;
  margin: auto;
  display: grid;
  background: lightgray;
`

const StyledErrorMessage = styled(ErrorMessage)`
  color: goldenrod;
`

export default function SignUpPage() {
  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = async ({ email, password }) => {
    const response = await axios.post(
      'http://localhost:8000/api/auth',
      {
        email,
        password
      }
    )
    console.log(response)
    router.push('/')
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('a must')
      .min(3, 'more than 3 chars')
      .max(100, 'less than 10')
      .email('invalid email you provide'),
    password: Yup.string()
      .required('also a must')
      .min(6, 'password should be more than 6 chars')
      .max(200, 'should be less than 20 chars')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {props => {
        return (
          <StyledForm>
            <h1>Sign Up</h1>
            <label htmlFor='email'>Email</label>
            <Field name='email' />
            <StyledErrorMessage
              name='email'
              component='span'
            />
            <label htmlFor='password'>Password</label>
            <Field name='password' />
            <StyledErrorMessage
              name='password'
              component='span'
            />
            <button
              type='submit'
              style={{ background: 'royalblue' }}
            >
              submit
            </button>
          </StyledForm>
        )
      }}
    </Formik>
  )
}
