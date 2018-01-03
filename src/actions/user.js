import { LOGIN, LOGOUT } from '../types/user';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
