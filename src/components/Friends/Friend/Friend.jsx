import React from "react"
import cl from './Friend.module.scss'
import icon from './images/manchester.jpg'

const Friend = (props) => {
    return (
        <div className={cl.wrapper}>
            <div>
                <img src={icon} className={cl.avatar} alt="" />
            </div>
            <div>
                <p className={ cl.infoTitle }>{props.friend.name}</p>
                <p className={ cl.infoText }>{props.friend.info}</p>
            </div>
        </div>
    )
};

export default Friend;