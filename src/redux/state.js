let store = {
    _state: {
        friends: [
            { id: 1, name: 'Arina', info: "Your friend since 2009 year" },
            { id: 2, name: 'Vika', info: "Your friend since 2018 year" },
        ],
        posts: [
            { id: 1, name: "Artyom", ctx: 'Hello, I\'m here!', likesCount: 0 }
        ],
        dialogs: [
            { id: 1, name: 'Artyom', last_message: "Hello!" }
        ],
    },
    getState() {
        return this._state
    },
    dispatch(action) { // action - object
        if (action.type === "ADD-POST") {
            let configurateID = store._state.posts[store._state.posts.length - 1] || 1

            if (configurateID.id !== undefined) {
                configurateID = configurateID.id + 1
            }

            let newPost = {
                id: configurateID,
                name: "BOT",
                ctx: action.msg,
                likesCount: 0,
            };

            store._state.posts.push(newPost)

            action.rerenderEntireTree(store._state);
        }
    }
}

export default store