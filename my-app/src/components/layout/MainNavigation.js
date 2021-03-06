import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/newmeetup">Add New meet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
