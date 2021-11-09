import React from "react"
import { NavLink } from "react-router-dom"
import cl from './Friend.module.scss'
import icon from './images/defaultIcon.png'

const Friend = (props) => {
    return (
        <NavLink to={'/profile/' + props.friend.id} className={ cl.userProfile }>
            <div className={cl.wrapper}>
                <div className={ cl.imageWrapper }>
                    <img src={props.friend.photos.large !== null ? props.friend.photos.large : icon} className={cl.avatar} alt="" />
                </div>
                <div className={ cl.textWrapper }>
                    <p className={ cl.infoTitle }>{props.friend.name}</p>
                </div>
            </div>
        </NavLink>
    )
};

export default Friend;