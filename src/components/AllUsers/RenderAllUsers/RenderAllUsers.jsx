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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    if (pagesCount > 10) {
        if (props.activePage > 2 && props.activePage < pagesCount - 1) {
            pages.push(1);
            pages.push([".", ".", "."]);
            pages.push(props.activePage - 1);
            pages.push(props.activePage);
            pages.push(props.activePage + 1);
            pages.push([".", ".", "."]);
            pages.push(pagesCount);
        } else if (props.activePage <= 2) {
            pages.push(1);
            pages.push(2);
            pages.push(3);
            pages.push([".", ".", "."]);
            pages.push(pagesCount - 2);
            pages.push(pagesCount - 1);
            pages.push(pagesCount);
        } else if (
            props.activePage >= pagesCount - 2 &&
            props.activePage <= pagesCount
        ) {
            pages.push(1);
            pages.push([".", ".", "."]);
            pages.push(pagesCount - 2);
            pages.push(pagesCount - 1);
            pages.push(pagesCount);
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }

    return (
        <div className={cl.usersFlex}>
            {props.fetching === false ? (
                <div className={cl.users}>
                    {props.users.map((user) => (
                        <SingleUser
                            key={user.id}
                            user={user}
                            friends={props.friends}
                            mapRemoveFriend={props.mapRemoveFriend}
                            mapAddFriend={props.mapAddFriend}
                        />
                    ))}
                    <div className={cl.links}>
                        {pages.map((page) =>
                            Array.isArray(page) ? (
                                <span>{page}</span>
                            ) : (
                                <span
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

            <div className={cl.filters}>FILTERS</div>
        </div>
    );
};

export default RenderAllUsers;
