import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';

const mapStateToProps = ({ authorizationStatus }: State) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClick() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Header(props: PropsFromRedux): JSX.Element {
  const { authorizationStatus, onClick } = props;

  const handleClick = () => onClick();
  const isAuth = authorizationStatus === 'AUTH';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth && (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                {isAuth ? (
                  <Link
                    className="header__nav-link"
                    to="#"
                    onClick={handleClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                ) : (
                  <Link className="header__nav-link" to={AppRoute.SignIn}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
export default connector(Header);
