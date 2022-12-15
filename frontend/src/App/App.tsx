import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import HomePage from '../features/homePage/HomePage';
import GamePage from '../features/game/GamePage/GamePage';
import LoginPage from '../features/auth/LoginPage';
import { loadQuizes } from '../features/game/api';
import { loadQuizesSuccess } from '../features/actionCreators';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    loadQuizes().then((data) => {
      dispatch(loadQuizesSuccess(data));
    });
  }, []);
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
