const initialState = [
    { id: 1, name: "Artyom", ctx: 'Hello, I\'m Artyom!', likesCount: 0 }
]

export const PostsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD-POST":
            let configurateID = state[state.length - 1] || 1

            if (configurateID.id !== undefined) {
                configurateID = configurateID.id + 1
            }
    
            let newPost = {
                id: configurateID,
                name: "BOT",
                ctx: action.msg,
                likesCount: 0,
            };
    
            state.push(newPost)
            
            return state
        default: 
            return state
    }
}