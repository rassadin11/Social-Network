let initialState = [];

export const AllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            state = action.users
            return state
    }
    return state
}
