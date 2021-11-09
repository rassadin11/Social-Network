import { useEffect } from "react";
import * as axios from "axios";
import RenderAllUsers from "./RenderAllUsers/RenderAllUsers";

const AllUsers = (props) => {
    useEffect(() => {
        props.isFetch(true);

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${props.activePage}&count=${props.pageSize}`
            )
            .then((response) => {
                props.setUsers(
                    response.data.items,
                    props.pageSize,
                    props.totalUsersCount,
                    props.activePage
                );
                props.setTotalCount(response.data.totalCount);
            });

        props.isFetch(false);
    }, [props.activePage]);

    return (
        <RenderAllUsers
            fetching={props.isFetching}
            users={props.users}
            friends={props.friends}
            mapAddFriend={props.mapAddFriend}
            mapRemoveFriend={props.mapRemoveFriend}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            activePage={props.activePage}
            changePage={props.changePage}
        />
    );
};

export default AllUsers;
