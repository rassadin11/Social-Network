import { combineReducers, createStore } from "redux";
import { PostsReducer } from './PostsReducer'
import { DialogsReducer } from './DialogsReducer'
import { FriendsReducer } from './FriendsReducer'

let reducers = combineReducers({
    posts: PostsReducer,
    dialogs: DialogsReducer,
    friends: FriendsReducer
})

let store = createStore(reducers);

export default store