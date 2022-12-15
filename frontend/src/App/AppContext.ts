import { createContext, Dispatch } from 'react';
import SuggestionsState from '../features/suggestions/types/State';
import SuggestionsAction from '../features/suggestions/types/Action';

type AppContextType = {
  state: SuggestionsState;
  dispatch: Dispatch<SuggestionsAction>;
};

const AppContext = createContext<AppContextType>(undefined as any);

export default AppContext;
