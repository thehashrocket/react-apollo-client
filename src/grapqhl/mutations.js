import { gql } from 'apollo-boost';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signUp(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
    }
  }
`