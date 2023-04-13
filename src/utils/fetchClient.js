import axios from 'axios'

const fetchClient = () => {
  const defaultOptions = {
    headers: {
      Authorization: '',
      'Content-Type': 'application/json'
    }
  }

  // Create instance
  const instance = axios.create(defaultOptions)

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const ISSERVER = typeof window === 'undefined'
    if (!ISSERVER) {
      const token = localStorage.getItem('token')
      if (config && config.headers) {
        config.headers.Authorization = token ? `Bearer ${token}` : ''
      }
    }
    return config
  })

  return instance
}

export default fetchClient()
