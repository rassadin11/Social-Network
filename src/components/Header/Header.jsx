import React, { useEffect } from "react";
import avatar from "./images/avatar.jpg";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  useEffect(() => {
    props.setBurger(false)
  }, [])

    return (
        <header>
            <div className="header-wrapper container">
                <NavLink to="/profile">
                    <img className="header__picture" src={avatar} alt="" />
                </NavLink>
                {props.resultCode === 0 ? <div className="user__info">
                    <p className="info-user__login">{props.login}</p>
                    <p className="info-user__email">{props.email}</p>
                </div> : <p className="info-user__login">U are not registered</p>}
                <nav className="header__menu">
                    <div className={props.burger ? "icon-menu active" : "icon-menu"} onClick={() => props.setBurger(!props.burger)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={props.burger ? "menu__list menu-list active" : "menu__list menu-list"} >
                        <li className="menu-list__item">
                            <NavLink to="/profile" onClick={() => props.setBurger(false)}>Profile</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/messages" onClick={() => props.setBurger(false)}>Messages</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/news" onClick={() => props.setBurger(false)}>News</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/friends" onClick={() => props.setBurger(false)}>Your friends</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/users" onClick={() => props.setBurger(false)}>All users</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/music" onClick={() => props.setBurger(false)}>Music</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/settings" onClick={() => props.setBurger(false)}>Settings</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/login" onClick={() => props.setBurger(false)}>LogIn</NavLink>
                        </li>
                        <li className="menu-list__item">
                            <NavLink to="/logout" onClick={() => props.setBurger(false)}>LogOut</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
