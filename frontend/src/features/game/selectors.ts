// в этом файле мы указываем функции, которые достают данные из стэйта

import { RootState } from '../../store';
import Suggestion from './types/Suggestion';

export const selectSuggestions = (state: RootState): Suggestion[] =>
  state.suggestions.suggestions;
