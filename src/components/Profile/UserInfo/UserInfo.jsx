import React, { useState } from "react";
import avatar from "./images/defaultIcon.png";
import SocialContacts from "./SocialContacts/SocialContacts";
import classes from "./UserInfo.module.scss";

const UserInfo = (props) => {

    let userContacts = Object.entries(props.profile.contacts)

    userContacts = userContacts.filter(key => {
        return ((key[1] !== null) && (key[1] !== ''))
    })

    let [toggleModalWindow, setToggleModalWindow] = useState(false)

    return (
        <div className={ classes.wrapper }>
            <div className={classes.imageWrapper}>
                {props.profile.photos.small ? (
                    <img
                        src={props.profile.photos.small}
                        alt=""
                        className={classes.userPicture}
                    />
                ) : (
                    <img src={avatar} alt="" />
                )}
            </div>
            <div className={classes.userInformation}>
                <div className={classes.personalInfo}>
                    <p className={classes.userName}>{props.profile.fullName}</p>
                    <p>Status: {props.status}</p>
                    <p className={classes.userDescription}>
                        Job: &nbsp;
                        {props.profile.lookingForAJob
                            ? props.profile.lookingForAJobDescription
                            : "Вне поиска работы"}
                    </p>
                    <button onClick={() => setToggleModalWindow(!toggleModalWindow)}>Change status</button>
                </div>
                {toggleModalWindow && 
                <div className={ classes.modalWindow }>
                    <p className={ classes.modalTitle }>
                        Your status
                    </p>
                    <input type="text" placeholder="Write new status here" className={ classes.inputField } />
                    <button className={ classes.modalButton } onClick={() => setToggleModalWindow(!toggleModalWindow)}>
                        Apply changes
                    </button>
                </div>}
                {userContacts.length > 0 ? <button className={classes.btn} onClick={() => {
                    props.setShowLinks(!props.showLink)
                }}>Show links</button> : ''}
                <p className={classes.contacts}>
                    {userContacts.length > 0 ? userContacts.map((key, idx) => {
                        if (idx > 2) return;
                        
                        return <SocialContacts link={key[1]} name={key[0]}/>
                    }) : 'Нет ссылок на социальные сети'}
                </p>
            </div>
        </div>
    );
};

export default UserInfo;
