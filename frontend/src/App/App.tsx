import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

import GamePage from '../features/quizes/GamePage/GamePage';
import LoginPage from '../features/auth/LoginPage';
import { loadTopics } from '../features/quizes/api';
import { loadTopicsSuccess } from '../features/actionCreators';
import QuizPage from '../features/quizes/QuizPage/QuizPage';

function App(): JSX.Element {
  const dispatch = useDispatch();

  // будем использовать юзефект после полной отрисовки вью
  //НЕ СЕЙЧАС!!!!
  // аналог аддлистнер
  useEffect(() => {
    // в дате массв топиков с инклюдом квизов
    loadTopics().then((data) => {

      dispatch(loadTopicsSuccess(data));
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/game/:QuestionId" element={<QuizPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
