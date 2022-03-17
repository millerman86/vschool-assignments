/**
 * Created by Douglas on 10/18/2017.
 */
import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'

import blitzEndPoint from '../cmsendpoint'

const networkInterface = createNetworkInterface({
  uri: blitzEndPoint

})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = localStorage.getItem('token')
    req.options.headers.authorization = token ? `Bearer ${localStorage.getItem('token')}` : null
    next()
  }}])


export const apollo = new ApolloClient({networkInterface})