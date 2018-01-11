import { LOGIN, LOGGING } from '../types/user';
import { IUserState, IPayloadAction } from '../../declarations';

const defaultState = {
  name: '',
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
      return { name: action.payload.name, status: LOGIN };
    default:
      return state;
  }
}
