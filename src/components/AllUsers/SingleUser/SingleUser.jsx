import React from "react";
import cl from "./SingleUser.module.scss";
import manchester from "../images/defaultIcon.png";
import { NavLink } from "react-router-dom";

const SingleUser = (props) => {
    const removeFriend = (id) => {
        props.mapRemoveFriend(id);
    };

    const addFriend = (user) => {
        props.mapAddFriend(user);
    };

    return (
        <div className={cl.mainContent}>
            <div className={cl.user}>
                <div className={cl.userWrapper}>
                    <NavLink to={"/profile/" + props.user.id}>
                        <img
                            src={
                                props.user.photos.large !== null
                                    ? props.user.photos.large
                                    : manchester
                            }
                            alt=""
                            className={cl.userImage}
                        />
                    </NavLink>
                </div>
                <div className={cl.userInfo}>
                    <p className={cl.name}>{props.user.name}</p>
                    {props.friends.filter(
                        (friend) => friend.id === props.user.id
                    ).length > 0 ? (
                        <button
                            onClick={() => removeFriend(props.user.id)}
                            className={cl.addFriendSmallSize}
                        >
                            Удалить из друзей
                        </button>
                    ) : (
                        <button
                            onClick={() => addFriend(props.user)}
                            className={cl.addFriendSmallSize}
                        >
                            Добавить в друзья
                        </button>
                    )}
                </div>
                <div className={cl.serverInfo}>
                    <p className={cl.dateCreated}>{props.user.date_created}</p>
                    {props.friends.filter(
                        (friend) => friend.id === props.user.id
                    ).length > 0 ? (
                        <button
                            onClick={() => removeFriend(props.user.id)}
                            className={cl.addFriend}
                        >
                            Удалить из друзей
                        </button>
                    ) : (
                        <button
                            onClick={() => addFriend(props.user)}
                            className={cl.addFriend}
                        >
                            Добавить в друзья
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleUser;
