import { LOGIN, LOGOUT } from '../types/user';

const login = () => ({
  type: LOGIN,
});

const logout = () => ({
  type: LOGOUT,
});

export { login, logout };
