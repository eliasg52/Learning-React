import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Navigation from '../src/components/layout/MainNavigation';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/newmeetup" exact>
          <NewMeetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
