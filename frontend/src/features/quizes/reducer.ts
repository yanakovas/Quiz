import { TopicsState } from './types/State';
import { TopicsAction } from './types/Action';

// это начальное состояние просто пустой массив
// делаем для редакса
const initialState: TopicsState = {
  topics: [],
};

function topicsReducer(
  // назначаем начальное состояние параметром по-умолчанию
  state: TopicsState = initialState,
  action: TopicsAction
): TopicsState {
  switch (action.type) {
    case 'topics/loadTopicsSuccess':
      //Возвращаем вместо пустого массива массив из action payload
      return { ...state, topics: action.payload };

    case 'quizes/answerQuestionFailed':
      return { ...state, quizes: action.payload };

    // для редакса необходим дефолтный кейс!
    default:
      return state;
  }
}

export default topicsReducer;

//редюсер чтобы менять стейт где угодно
