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
    let [statusValue, setStatusValue] = useState('')

    let sendNewStatus = (e) => {
        console.log(props.status)
        e.stopPropagation()
        if (statusValue.length < 300) {
            setToggleModalWindow(!toggleModalWindow)
            props.changeUserStatus(statusValue)
        } else {
            return alert(`Your status has more than 300 symbols. Delete ${statusValue.length - 300} symbol(s)`)
        }
    }

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
                    <p>Status: {!toggleModalWindow && <span>{props.status}</span>}</p>
                    <p className={classes.userDescription}>
                        Job: &nbsp;
                        {props.profile.lookingForAJob
                            ? props.profile.lookingForAJobDescription
                            : "Вне поиска работы"}
                    </p>
                    <button onClick={() => setToggleModalWindow(!toggleModalWindow)}>Change status</button>
                </div>
                {toggleModalWindow && 
                <div className={ classes.modalWindow } onClick={e => setToggleModalWindow(!toggleModalWindow)}>
                    <p className={ classes.modalTitle } onClick={e => e.stopPropagation()}>
                        Your status
                    </p>
                    <input type="text" placeholder="Write new status here" value={statusValue} onChange={(e) => setStatusValue(e.target.value)} onClick={e => e.stopPropagation()} className={ classes.inputField } />
                    <button className={ classes.modalButton } onClick={(e) => sendNewStatus(e)}>
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
