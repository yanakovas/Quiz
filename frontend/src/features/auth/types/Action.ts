import User from './User';

type AuthAction = {
  type: 'auth/loginSuccess';
  payload: User;
};

export default AuthAction;
