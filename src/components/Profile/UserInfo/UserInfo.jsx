import React from "react";
import avatar from "./images/defaultIcon.png";
import SocialContacts from "./SocialContacts/SocialContacts";
import classes from "./UserInfo.module.scss";

const UserInfo = (props) => {

    let userContacts = Object.entries(props.profile.contacts)

    userContacts = userContacts.filter(key => {
        return ((key[1] !== null) && (key[1] !== ''))
    })

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
                    <p className={classes.userDescription}>
                        Работа: &nbsp;
                        {props.profile.lookingForAJob
                            ? props.profile.lookingForAJobDescription
                            : "Вне поиска работы"}
                    </p>
                </div>
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
