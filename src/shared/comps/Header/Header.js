import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import HeaderStyles from './HeaderStyles'
import { userIsLoggedIn, signOut } from '../../../utils/userUtils'

function NavLink(props) {
  return (
      <li>
        <Link {...props} style={{ color: "inherit" }} />
      </li>
  );
}

const Header = props => {
    return (
        <HeaderStyles data-testid={`nav`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new">New</NavLink>
          <NavLink to="/top">Top</NavLink>
          <NavLink to="/search">Search</NavLink>
          {userIsLoggedIn() && (
              <NavLink to="/create">
                submit
              </NavLink>
          )}
          {userIsLoggedIn() ? (
              <div
                  className="ml1 pointer black"
                  onClick={() => {
                    signOut();
                    this.props.history.push(`/`)
                  }}
              >
                Logout
              </div>
          ) : (
              <NavLink to="/login" className="ml1 no-underline black">
                Login
              </NavLink>
          )}
        </HeaderStyles>
    )
}

export default Header