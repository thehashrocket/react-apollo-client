import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { userIsLoggedIn, signOut } from '../../../utils/userUtils'

class Header extends Component {
  render() {
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">
          <Link to="/" className="ml1 no-underline black">
            Home
          </Link>
          </div>
          <Link to="/new" className="ml1 no-underline black">
            new
          </Link>
          <div className="ml1">|</div>
          <Link to="/top" className="ml1 no-underline black">
            top
          </Link>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline black">
            search
          </Link>
          {userIsLoggedIn() && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/create" className="ml1 no-underline black">
                submit
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {userIsLoggedIn() ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                signOut();
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
              <Link to="/login" className="ml1 no-underline black">
                login
            </Link>
            )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)