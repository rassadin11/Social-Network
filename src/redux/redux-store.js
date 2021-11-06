import { combineReducers, createStore } from "redux";
import { PostsReducer } from "./PostsReducer";
import { DialogsReducer } from "./DialogsReducer";
import { FriendsReducer } from "./FriendsReducer";
import { AllUsersReducer } from "./AllUsersReducer";

export const AddPostActionCreator = (text) => ({
  type: "ADD-POST",
  msg: text,
});

export const AddMessageToDialog = (text, activeID) => ({
  type: "ADD-MESSAGE",
  activeID: activeID,
  author: "Artyom",
  text_message: text,
  timestamp: Date.now(),
});

export const removeDialog = (newArray) => ({
  type: "REMOVE-DIALOG",
  newArray: newArray,
});

export const dialog = (id) => ({
  type: "CHANGE-ACTIVE-DIALOG",
  activeDialog: id,
});

export const removeFriend = (id) => ({
  type: "REMOVE-FRIEND",
  id: id,
});

export const addFriend = (user) => ({
  type: "ADD-FRIEND",
  user: user,
});

export const isFetching = (fetch) => {
  return {
    type: "FETCHING",
    isFetching: fetch,
  };
};

export const changeProfile = (profile) => {
  return {
    type: "CHANGE_PROFILE",
    profile
  }
}

export const setUsers = (users, pageSize, totalUsersCount, activePage) => {
  return {
    type: "SET_USERS",
    users: users,
    pageSize: pageSize,
    totalUsersCount: totalUsersCount,
    activePage: activePage,
  };
};

export const changePage = (activePage) => {
  return {
    type: "CHANGE_PAGE",
    activePage: activePage,
  };
};

export const setTotalCountAC = (totalCount) => {
  return {
    type: "CHANGE_TOTAL_USERS_COUNT",
    totalCount,
  };
};

let reducers = combineReducers({
  posts: PostsReducer,
  dialogs: DialogsReducer,
  friends: FriendsReducer,
  users: AllUsersReducer,
});

let store = createStore(reducers);

export default store;
