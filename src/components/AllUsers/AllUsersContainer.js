import { connect } from "react-redux";
import AllUsers from "./AllUsers";
import {
  removeFriend,
  addFriend,
  setUsers,
  changePage,
  setTotalCountAC,
  isFetching,
} from "../../redux/redux-store";

let mapStatetoProps = (state) => {
  return {
    users: state.users.users,
    friends: state.friends,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    activePage: state.users.activePage,
    isFetching: state.users.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    mapRemoveFriend: (id) => {
      dispatch(removeFriend(id));
    },

    mapAddFriend: (user) => {
      dispatch(addFriend(user));
    },

    setUsers: (users, pageSize, totalUsersCount, activePage) => {
      dispatch(setUsers(users, pageSize, totalUsersCount, activePage));
    },

    changePage: (activePage) => {
      dispatch(changePage(activePage));
    },

    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },

    isFetch: (fetch) => {
      dispatch(isFetching(fetch));
    },
  };
};

const AllUsersContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(AllUsers);

export default AllUsersContainer;
