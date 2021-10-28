import {rerenderEntireTree} from '../render'

let state = {
    friends: [
        {id: 1, name: 'Arina', info: "Your friend since 2009 year"},
        {id: 2, name: 'Vika', info: "Your friend since 2018 year"},
    ],
    posts: [

    ],
    dialogs: [
        {id: 1, name: 'Artyom', last_message: "Hello!"}
    ]
}

export let addPost = (msg) => {
    let newPost = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: msg,
        likesCount: 0,
    };

    state.posts.push(newPost)

    rerenderEntireTree();
}

export default state