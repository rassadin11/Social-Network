import React from "react"
import cl from './Friend.module.scss'
import icon from './images/manchester.jpg'

const Friend = (props) => {
    return (
        <div className={cl.wrapper}>
            <div className={ cl.imageWrapper }>
                <img src={props.friend.photos.large !== null ? props.friend.photos.large : icon} className={cl.avatar} alt="" />
            </div>
            <div className={ cl.textWrapper }>
                <p className={ cl.infoTitle }>{props.friend.name}</p>
                {/* <p className={ cl.infoText }>{props.friend.location.country} / {props.friend.location.city}</p> */}
            </div>
        </div>
    )
};

export default Friend;