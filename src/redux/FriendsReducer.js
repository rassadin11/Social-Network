const initialState = [
    { id: 2, name: 'Arina', country: 'Russia', city: 'Rostov-on-Done' },
    { id: 3, name: 'Vika', country: 'Russia', city: 'Moscow' },
]

export const FriendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE-FRIEND":
            return state.filter(friend => friend.id !== action.id)
        case "ADD-FRIEND":
            state.push(action.user)
            return state
        default:
            return state
    }
}