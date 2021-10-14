import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import NotFound from '../not-found/not-found';

type AppProps = {
  rentCount: number;
};

function App({ rentCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main rentCount={rentCount} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
