
import { Link } from 'react-router-dom';

import style from './Navigation.module.css';

function Navigation(): JSX.Element {
  return <nav className={style.container}>
    <Link to='/'>Home</Link>
    <Link to='/game'>Game</Link>
    <Link to='/login'>Login</Link>
  </nav>;
}
export default Navigation