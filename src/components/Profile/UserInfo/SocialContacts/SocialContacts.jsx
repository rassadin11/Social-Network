import React from "react";
import cl from "./SocialContacts.module.scss";

const SocialContacts = ({link, name}) => {
    if (link.indexOf("http") === -1) {
        link = "https://" + link
    }

    return (
        <div className={cl.wrapper}>
            <span className={cl.socialLink}>{name}:&nbsp; </span>
            <span className={cl.socialNet}><a href={link}>{link}</a></span>
        </div>
    );
};

export default SocialContacts;
