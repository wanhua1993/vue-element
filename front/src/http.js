import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default axios