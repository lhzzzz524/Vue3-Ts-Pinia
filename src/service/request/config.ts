let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://ceshi/test'
} else {
  BASE_URL = 'http://ceshi/prod'
}

export { BASE_URL, TIME_OUT }
