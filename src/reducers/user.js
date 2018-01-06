import { LOGIN } from '../types/user';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return { name: 'lalala' };
    default:
      return state;
  }
}
