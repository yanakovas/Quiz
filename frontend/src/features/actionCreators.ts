import QuizesAction, { TopicsAction } from './quizes/types/Action';
import Quiz from './quizes/types/Quiz';
import Topic from './quizes/types/Topics';


// принимаем массив топиков из юзефекта 
export const loadTopicsSuccess = (topics: Topic[]): TopicsAction => ({
  type: 'topics/loadTopicsSuccess',
  payload: topics,
});
