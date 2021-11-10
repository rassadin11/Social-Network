import React from "react";
import cl from "./SingleUser.module.scss";
import manchester from "../images/defaultIcon.png";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../api/api";

const SingleUser = (props) => {
    const removeFriend = (id) => {
        props.mapRemoveFriend(+id);
    };

    const addFriend = (user) => {
        props.mapAddFriend(user);
    };

    return (
        <div className={cl.mainContent} key={props.user.id}>
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
                    {props.user.followed ? (
                        <button disabled={props.followingInProgress} onClick={() => {
                            props.removeFollow(props.user)
                        }}
                            className={cl.addFriend}>
                            Удалить из друзей
                        </button>
                    ) : (<button disabled={props.followingInProgress}
                        onClick={async () => {
                            props.followInProgress(true)

                            await followAPI.addFriend(props.user.id).then((data) => {
                                if (!data.resultCode) {
                                    addFriend(props.user);
                                    props.user.followed = !props.user.followed
                                }
                            });

                            props.followInProgress(false)
                        }}
                        className={cl.addFriend}>
                        Добавить в друзья
                    </button>
                    )}
                </div>
                <div className={cl.serverInfo}>
                    <p className={cl.dateCreated}>{props.user.date_created}</p>
                    {props.user.followed ? (
                        <button
                            onClick={() => {
                                props.followInProgress(true)

                                followAPI.deleteFriend(props.user.id).then((data) => {
                                    if (!data.resultCode) {
                                        removeFriend(props.user.id);
                                    }
                                });

                                props.followInProgress(false)
                            }}

                            className={cl.addFriendSmallSize}
                        >
                            Удалить из друзей
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                props.followInProgress(true)

                                followAPI.addFriend(props.user).then((data) => {
                                    if (!data.resultCode) {
                                        addFriend(props.user);
                                    }
                                });

                                props.followInProgress(false)
                            }}
                            className={cl.addFriendSmallSize}
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
