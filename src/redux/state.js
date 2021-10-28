export const AddPostActionCreator = (text, func) => ({
    type: "ADD-POST",
    msg: text,
    rerenderEntireTree: func
})

export const AddMessageToDialog = (text, activeID, func) => ({
    type: "ADD-MESSAGE",
    activeID: activeID,
    author: "Artyom",
    text_message: text,
    timestamp: Date.now(),
    rerenderEntireTree: func
})

let store = {
    _state: {
        friends: [
            { id: 1, name: 'Arina', info: "Your friend since 2009 year" },
            { id: 2, name: 'Vika', info: "Your friend since 2018 year" },
        ],
        posts: [
            { id: 1, name: "Artyom", ctx: 'Hello, I\'m Artyom!', likesCount: 0 }
        ],
        dialogs: [
            {
                id: 1, name: 'Karina', last_message: "Nice! So, what about you?", all_messages: [
                    {
                        author: 'Artyom',
                        text_message: "Hi! How are you?",
                        timestamp: Date.now()
                    },
                    {
                        author: 'Karina',
                        text_message: "Nice! So, what about you?",
                        timestamp: Date.now()
                    }
                ]
            },
            { id: 2, name: "Aleksei", last_message: "Good morning, friend!", all_messages: [
                {
                    author: 'Artyom',
                    text_message: "Hi! WOOOW!!!",
                    timestamp: Date.now()
                },
                {
                    author: 'Aleksei',
                    text_message: "Good morning, friend!",
                    timestamp: Date.now()
                }
            ]},
            { id: 3, name: "Alena", last_message: "Hello!", all_messages: [
                {
                    author: 'Artyom',
                    text_message: "Greet!",
                    timestamp: Date.now()
                },
                {
                    author: 'Alena',
                    text_message: "Hello!",
                    timestamp: Date.now()
                }
            ]},
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
        if (action.type === "ADD-MESSAGE") {
            for (let item of store.getState().dialogs) {
                if (item.id === action.activeID) {
                    item.all_messages.push({author: action.author, text_message: action.text_message, timestamp: Date.now()})
                }
            }

            action.rerenderEntireTree(store._state)
        }
    }
}

export default store