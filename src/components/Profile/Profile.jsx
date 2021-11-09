import React, { useState } from "react";
import Posts from "./Posts/Posts";
import UserInfo from "./UserInfo/UserInfo";
import ProfileFormContainer from "./ProfileForm/ProfileFormContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";
import cl from "./Profile.module.scss";
import "./Profile.scss";
import SocialContacts from "./UserInfo/SocialContacts/SocialContacts";

const Profile = (props) => {
    let [showLink, setShowLinks] = useState(false);
    
    if (!props.profile) {
        return <Preloader />
    }

    let userContacts = Object.entries(props.profile.contacts);

    userContacts = userContacts.filter((key) => {
        return key[1] !== null && key[1] !== "";
    });

    return (
        <div className="main">
            <ProfileInfo />
            <UserInfo
                profile={props.profile}
                showLink={showLink}
                setShowLinks={setShowLinks}
            />
            <div>
                <div className={showLink ? cl.links + "active" : cl.links}>
                    {userContacts.length > 0
                        ? userContacts.map((key, idx) => {
                              if (idx > 2) return;

                              return (
                                  <SocialContacts link={key[1]} name={key[0]} />
                              );
                          })
                        : "Нет ссылок на социальные сети"}
                </div>
            </div>
            <ProfileFormContainer />
            <Posts />
        </div>
    );
};

export default Profile;
