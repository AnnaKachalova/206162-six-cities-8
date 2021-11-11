import { connect, ConnectedProps } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute /*AuthorizationStatus*/ } from '../../const';
import Main from '../main/main';
import Login from '../login/login';
import Room from '../room/room';
//import Favorites from '../favorites/favorites';
import NotFound from '../not-found/not-found';
//import PrivateRoute from '../private-route/private-route';


import LoadingScreen from '../loading-screen/loading-screen';
import { State } from '../../types/state';
const mapStateToProps = ({ authorizationStatus, isDataLoaded }: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {isDataLoaded} = props;
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
        <Route exact path={AppRoute.Room}>
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
/*
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute> */
