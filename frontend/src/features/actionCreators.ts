import QuizesAction from './quizes/types/Action';
import Quiz from './quizes/types/Quiz';

export const loadQuizesSuccess = (quizes: Quiz[]): QuizesAction => ({
  type: 'quizes/loadQuizesSuccess',
  payload: quizes,
});
