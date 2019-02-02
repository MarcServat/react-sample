import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

const Header = ({authUser}) => {
  const authButton = authUser ? (
      <a href='api/logout'>LogOut</a>
  ) : (
      <a href='api/auth/google'>LogIn</a>
  );
  return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to={'/'}>React ssr</Link>
            <ul className="right">
              <li><Link to={'/users'}>Users</Link></li>
              <li><Link to={'/admins'}>Admins</Link></li>
              <li>{authButton}</li>
            </ul>
        </div>
      </nav>
  )
};

function mapStateToProps({authUser}) {
  return {authUser};
}

export default connect(mapStateToProps)(Header)

