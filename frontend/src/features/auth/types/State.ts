import User from './User';
import Topic from '../../quizes/types/Topics';

type AuthState = {
  user?: User;
  topics: Topic[];
};

export default AuthState;
