import axios from 'axios'

const userAxios = axios.create()

// A user will need to be logged in at all times, starting from the log in screen. While sending a user token 
// for every request isn't strictly necessary, it simplifies the code for the application.
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default userAxios