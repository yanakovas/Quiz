import AuthState from './types/State';
import AuthAction from './types/Action';

const initialState: AuthState = {
  user: undefined,
};

function authReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'auth/loginSuccess':
      return { ...state, user: action.payload };

    // для редакса необходим дефолтный кейс!
    default:
      return state;
  }
}

export default authReducer;
