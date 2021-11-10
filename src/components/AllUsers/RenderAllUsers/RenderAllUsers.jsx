import React from "react";
import SingleUser from "../SingleUser/SingleUser";
import cl from "./AllUsers.module.scss";
import Preloader from "../../Preloader/Preloader";

const RenderAllUsers = (props) => {
    const changeActivePage = (currentPage) => {
        if (+currentPage !== +props.activePage) {
            props.changePage(+currentPage);
        }
    };

    return (
        <div className={cl.usersFlex}>
            {props.fetch === false ? (
                <div className={cl.users}>
                    {props.users.map((user) => (
                        <SingleUser
                            removeFollow={props.removeFollow}
                            followingInProgress={props.followingInProgress} // variable
                            followInProgress={props.followInProgress} // method
                            key={user.id}
                            user={user}
                            friends={props.friends}
                            mapRemoveFriend={props.mapRemoveFriend}
                            mapAddFriend={props.mapAddFriend}
                        />
                    ))}
                    <div className={cl.links}>
                        {props.pages.map((page) =>
                            Array.isArray(page) ? (
                                <span key={page}>{page}</span>
                            ) : (
                                <span
                                    key={page}
                                    onClick={(e) =>
                                        changeActivePage(e.target.innerHTML)
                                    }
                                    className={
                                        props.activePage === page && cl.selected
                                    }
                                >
                                    {page}
                                </span>
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div className={cl.users}>
                    <Preloader />
                </div>
            )}
        </div>
    );
};

export default RenderAllUsers;
