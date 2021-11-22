import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getCurrentUserEmail } from '../../store/user/selectors';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';


function Header(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentUserEmail = useSelector(getCurrentUserEmail);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logoutAction());
  };

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
                      {currentUserEmail}
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

export default Header;
