import { Formik, Field, Form, ErrorMessage } from 'formik'
import Cookies from 'js-cookie'
import axios from 'axios'
import router from 'next/router'
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
    const { data: token } = await axios.post(
      'http://localhost:8000/api/loginAuth',
      {
        email,
        password
      }
    )
    if (token) {
      Cookies.set('token', token)
      Cookies.set('id', token)
      Cookies.remove('token')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {props => {
        return (
          <StyledForm>
            <h1>Login</h1>
            <label htmlFor='email'>Email</label>
            <Field name='email' />
            <StyledErrorMessage
              name='email'
              component='span'
            />
            <label htmlFor='password'>Password</label>
            <Field name='password' type='password' />
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
