import QuizesAction from './game/types/Action';
import Quiz from './game/types/Quiz';

export const loadQuizesSuccess = (quizes: Quiz[]): QuizesAction => ({
  type: 'quizes/loadQuizesSuccess',
  payload: quizes,
});
