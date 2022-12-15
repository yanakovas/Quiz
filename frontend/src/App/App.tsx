import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadSuggestions } from '../features/suggestions/api';
import SuggestionsPage from '../features/suggestions/Page/Page';
import { loadSuggestionsSuccess } from '../features/suggestions/actionCreators';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    loadSuggestions().then((data) => {
      dispatch(loadSuggestionsSuccess(data));
    });
  }, [dispatch]);

  return <SuggestionsPage />;
}

export default App;
