import SuggestionsState from './types/State';
import SuggestionsAction from './types/Action';

// это начальное состояние
const initialState: SuggestionsState = {
  suggestions: [],
};

function suggestionsReducer(
  // назначаем начальное состояние параметром по-умолчанию
  state: SuggestionsState = initialState,
  action: SuggestionsAction
): SuggestionsState {
  switch (action.type) {
    case 'suggestions/loadSuggestionsSuccess':
      return { ...state, suggestions: action.payload };

    // для редакса необходим дефолтный кейс!
    default:
      return state;
  }
}

export default suggestionsReducer;
