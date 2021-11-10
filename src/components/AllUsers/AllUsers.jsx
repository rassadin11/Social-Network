import { useEffect } from "react";
import RenderAllUsers from "./RenderAllUsers/RenderAllUsers";

const AllUsers = (props) => {

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

    useEffect(() => {
        props.getUsersThunkCreator(props.activePage, props.pageSize, props.totalUsersCount)
    }, [props.activePage]);

    return (
        <RenderAllUsers
            pages={pages}
            removeFollow={props.removeFollow}
            followingInProgress={props.followingInProgress} // variable
            followInProgress={props.followInProgress} // method
            fetching={props.isFetching}
            fetch={props.isFetch}
            users={props.users}
            friends={props.friends}
            mapAddFriend={props.addFriend}
            mapRemoveFriend={props.removeFriend}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            activePage={props.activePage}
            changePage={props.changePage}
        />
    );
};

export default AllUsers;
