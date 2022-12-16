import User from './User';

type AuthAction =
  | {
      type: 'auth/loginSuccess';
      payload: User;
    }
  | {
      type: 'quizes/answerQuestionSuccess';
      payload: number;
    };

export default AuthAction;
