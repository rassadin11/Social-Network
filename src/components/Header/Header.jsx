import React from 'react';
import avatar from './images/avatar.jpg';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <div className="header-wrapper container">
        <NavLink to="/profile"><img className="header__picture" src={avatar} alt="" /></NavLink>
      </div>
    </header>
  )
}

export default Header