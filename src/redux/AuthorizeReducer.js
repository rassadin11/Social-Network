let initialState = {
    info: undefined,
    isFetching: false,
    isAuth: undefined,
    userDescription: undefined,
    resultCode: 0
}

export const AuthorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                info: action.info,
                resultCode: action.resultCode,
                isAuth: true,
            }
        case "FETCH":
            return {
                ...state,
                isFetching: action.value
            }
        case "USER_DESCRIPTION":
            return {
                ...state,
                userDescription: action.userDescription,
                isAuth: action.userDescription ? true : false
            }
        default:
            return state
    }
}

