import { combineReducers, createStore } from "redux";
import { PostsReducer } from './PostsReducer'
import { DialogsReducer } from './DialogsReducer'
import { FriendsReducer } from './FriendsReducer'

export const AddPostActionCreator = (text) => ({
    type: "ADD-POST",
    msg: text
})

export const AddMessageToDialog = (text, activeID) => ({
    type: "ADD-MESSAGE",
    activeID: activeID,
    author: "Artyom",
    text_message: text,
    timestamp: Date.now()
})

export const removeDialog = (newArray) => ({
    type: "REMOVE-DIALOG",
    newArray: newArray
})

export const dialog = (id) => ({
    type: "CHANGE-ACTIVE-DIALOG",
    activeDialog: id
})

let reducers = combineReducers({
    posts: PostsReducer,
    dialogs: DialogsReducer,
    friends: FriendsReducer
})

let store = createStore(reducers);

export default store