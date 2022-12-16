import AuthState from './types/State';
import AuthAction from './types/Action';

const initialState: AuthState = {
  user: undefined,
  topics: [],
};

function authReducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case 'auth/loginSuccess':
      return { ...state, user: action.payload };

    case 'quizes/answerQuestionSuccess':
      return {
        ...state,
        user: state.user && {
          ...state.user,
          points: state.user.points + Number(action.payload),
        },
      };

    // для редакса необходим дефолтный кейс!
    default:
      return state;
  }
}

export default authReducer;
