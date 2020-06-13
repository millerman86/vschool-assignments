import * as Storage from './Storage'
import { apollo } from "./apollo"
import { gql } from 'react-apollo'

export const login = (email, password) => {
  apollo.mutate({
    mutation: gql`
        mutation ($email: String!,$password: String!) {
            signinUser(email:{email: $email, password:$password}){token}}`,
    variables: {
      email,
      password
    }
  })
  .then((response) => {
    Storage.save('token', response.data.signinUser.token)
    window.location.replace('/')
  })
  .catch(err => console.log(err))
}

export const isAuthenticated = () => {
  try {
    const auth = Storage.itemByKey('token')
    return (auth !== undefined && auth !== null)
  } catch (err) {
    console.error(err)
    return false
  }
}