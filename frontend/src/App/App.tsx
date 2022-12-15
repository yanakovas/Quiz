import { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import AppContext from './AppContext';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../features/homePage/HomePage';
import GamePage from '../features/game/GamePage/GamePage';
import LoginPage from '../features/auth/LoginPage';


function App(): JSX.Element {
  
   // централизованный стэйт
   const [state, dispatch] = useReducer(suggestionsReducer, { suggestions: [] });//-------------------

  return (
      <AppContext.Provider value={{state,dispatch}}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>          
          <Route path='/game' element={<GamePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </AppContext.Provider>
  )
}

export default App;
