import { connect } from "react-redux";
import AllUsers from "./AllUsers";
import {
  removeFriend,
  addFriend,
  setUsers,
  changePage,
  setTotalCount,
  isFetching,
  followInProgress,
  getUsersThunkCreator,
  removeFollow
} from "../../redux/redux-store";

let mapStatetoProps = (state) => {
  return {
    users: state.users.users,
    friends: state.friends,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    activePage: state.users.activePage,
    isFetch: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  };
};

const AllUsersContainer = connect(
  mapStatetoProps,
  {
    removeFriend,
    addFriend,
    setUsers,
    changePage,
    setTotalCount,
    isFetching,
    followInProgress,
    getUsersThunkCreator,
    removeFollow
  }
)(AllUsers);

export default AllUsersContainer;
