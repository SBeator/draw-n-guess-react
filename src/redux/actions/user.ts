import { LOGGING, LOGIN } from '../types/user'

const logging = (name: string) => ({
  type: LOGGING,
  payload: {
    name,
  },
})

const login = (name: string) => ({
  type: LOGIN,
  payload: {
    name,
  },
})

export { logging, login }
