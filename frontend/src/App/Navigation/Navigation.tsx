import { NavLink, Outlet } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import style from './Navigation.module.css';
import { RootState } from '../../store';

function Navigation(): JSX.Element {
  const name = useSelector((store: RootState) => store.userState);
  console.log(name);

  return (
    <nav className={style.container}>
      (name.name ? (
      <div className="app__container">
        <nav className="header__nav">
          <div className="header__container">
            <ul className="header__menu">
              <li>
                <NavLink className="header__item" to="/main">
                  Jeopardy
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/main">
                  Game
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/results">
                  Results
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/auth/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
      ) : (
      <div className="app__container">
        <nav className="header__nav">
          <div className="header__container">
            <ul className="header__menu">
              <li>
                <NavLink className="header__item" to="/auth/registration">
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/auth/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="header__item" to="/auth/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
      ) )
    </nav>
  );
}
export default Navigation;
