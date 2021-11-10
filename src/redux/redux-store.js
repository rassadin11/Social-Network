import { applyMiddleware, combineReducers, createStore } from "redux";
import { PostsReducer } from "./PostsReducer";
import { DialogsReducer } from "./DialogsReducer";
import { FriendsReducer } from "./FriendsReducer";
import { AllUsersReducer } from "./AllUsersReducer";
import { AuthorizeReducer } from "./AuthorizeReducer";
import { usersAPI, followAPI, AuthAPI } from '../api/api'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    posts: PostsReducer,
    dialogs: DialogsReducer,
    friends: FriendsReducer,
    users: AllUsersReducer,
    auth: AuthorizeReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export const getUsersThunkCreator = (activePage, pageSize, totalUsersCount) => (dispatch) => {
    dispatch(isFetch(true));

    usersAPI.getUsers(activePage, pageSize).then((data) => {
        dispatch(setUsers(
            data.items,
            pageSize,
            totalUsersCount,
            activePage
        ));
        dispatch(setTotalCount(data.totalCount));
        dispatch(isFetch(false));
    });
}

export const removeFollow = (user) => (dispatch) => {
    dispatch(followInProgress(true))

    followAPI.deleteFriend(user.id).then((data) => {
        if (!data.resultCode) {
            dispatch(removeFriend(user.id));
        }
    });

    user.followed = !user.followed

    dispatch(followInProgress(false))
}

export const addFollow = (user) => (dispatch) => {
    dispatch(followInProgress(true))

    followAPI.addFriend(user.id).then((data) => {
        if (!data.resultCode) {
            dispatch(addFriend(user));
            user.followed = !user.followed
        }
    });

    dispatch(followInProgress(false))
}

export const loadUserInfo = () => (dispatch) => {
    dispatch(isFetch(true))

    AuthAPI.authMe()
        .then(response => {
            return dispatch(setData(response.data, response.resultCode))
        })
        .then((data) => {
            AuthAPI.myProfile(data).then(response => {
                dispatch(userDescription(response.data))
            })
        })

    dispatch(isFetch(false))
}

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

export const setUserProfile = (profile) => ({
    type: "CHANGE_PROFILE",
    profile,
});

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

export const setTotalCount = (totalCount) => {
    return {
        type: "CHANGE_TOTAL_USERS_COUNT",
        totalCount,
    };
};

export const setData = (obj, resultCode) => {
    return {
        type: "SET_DATA",
        info: obj,
        resultCode: resultCode
    }
};

export const isFetch = fetch => ({
    type: "FETCH",
    value: fetch
})

export const userDescription = desc => ({
    type: "USER_DESCRIPTION",
    userDescription: desc
})

export const followInProgress = follow => ({
    type: "FOLLOWING-IN-PROGRESS",
    followingInProgress: follow
})

export default store;
