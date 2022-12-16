import QuizesState from './types/State';
import QuizesAction from './types/Action';

// это начальное состояние просто пустой массив
// делаем для редакса
const initialState: QuizesState = {
  quizes: [],
};

function quizesReducer(
  // назначаем начальное состояние параметром по-умолчанию
  state: QuizesState = initialState,
  action: QuizesAction
): QuizesState {
  switch (action.type) {
    case 'quizes/loadQuizesSuccess':
      return { ...state, quizes: action.payload };

    case 'quizes/answerQuestionFailed':
      return { ...state, quizes: action.payload };

    // для редакса необходим дефолтный кейс!
    default:
      return state;
  }
}

export default quizesReducer;

//редюсер чтобы менять стейт где угодно
