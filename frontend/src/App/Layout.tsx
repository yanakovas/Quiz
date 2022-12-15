import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function Layout(): JSX.Element {
  return (
    <div className="App">
      <Navigation />
      {/* Место, в которое будут рендериться все страницы */}
      <Outlet />
    </div>
  );
}

export default Layout;
