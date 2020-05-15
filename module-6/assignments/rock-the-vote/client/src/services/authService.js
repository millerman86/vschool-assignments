import axios from 'axios'


const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  }

export default {
    isAuthenticated: false,
    authenticate() {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:9000/auth/login', {'username': 'amren', 'password': 'amren'}, config)
              .then(response => {
                sessionStorage.setItem('token', response.data.token)
                return resolve('done')
              })
              .catch(err => reject(new Error('error')))

        })
    },
    signout() {
      sessionStorage.setItem('token', null)
      this.isAuthenticated = false
    }
  }