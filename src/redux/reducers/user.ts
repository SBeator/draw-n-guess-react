import { LOGIN, LOGGING } from '../types/user';
import { IUserState, IPayloadAction } from '../../declarations';

import { getCurrentUser, setCurrentUser } from '../../utils/userInfo';

const defaultState = {
  name: getCurrentUser() || '',
  status: 'idle',
};

export default function reducer(
  state: IUserState = defaultState,
  action: IPayloadAction
): IUserState {
  switch (action.type) {
    case LOGGING:
      return { name: '', status: LOGGING };
    case LOGIN:
      setCurrentUser(action.payload.name);
      return { name: action.payload.name, status: LOGIN };
    default:
      return state;
  }
}
