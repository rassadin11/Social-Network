import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import './Navbar.scss'

const Navbar = props => {
  return (
    <aside className="sidebar">
      <nav className="sidebar_wrapper">
        <ul className="sidebar_nav">
          <li className="sidebar_item"><NavLink to={props.id === undefined ? `/profile/2` : `/profile/${props.id.userId}`}>Profile</NavLink></li>
          <li className="sidebar_item"><NavLink to="/messages">Messages</NavLink></li>
          <li className="sidebar_item"><NavLink to="/news">News</NavLink></li>
          <li className="sidebar_item"><NavLink to="/friends">Your friends</NavLink></li>
          <li className="sidebar_item"><NavLink to="/users">All users</NavLink></li>
          <li className="sidebar_item"><NavLink to="/music">Music</NavLink></li>
          <li className="sidebar_item"><NavLink to="/settings">Settings</NavLink></li>
          {!props.isAuth 
          ? <li className="sidebar_item"><NavLink to="/login">LogIn</NavLink></li> 
          : <li className="sidebar_item"><NavLink to="/logout">LogOut</NavLink></li>}
        </ul>
      </nav>
    </aside>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.userDescription
})

export default connect(mapStateToProps, {})(Navbar)