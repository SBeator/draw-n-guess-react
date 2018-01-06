import { LOGIN } from '../types/user';
import { UserState, PayloadAction } from '../../declarations';

export default function reducer(
  state: UserState = {},
  action: PayloadAction
): UserState {
  switch (action.type) {
    case LOGIN:
      return { name: 'lalala' };
    default:
      return state;
  }
}
