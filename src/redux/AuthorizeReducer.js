let initialState = {
    info: undefined,
    isFetching: false,
    isAuth: false,
    userDescription: undefined,
    resultCode: 0,
    status: null
}

export const AuthorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                info: action.info,
                resultCode: action.resultCode,
                isAuth: action.resultCode ? false : true
            }
        case "FETCH":
            return {
                ...state,
                isFetching: action.value
            }
        case "USER_DESCRIPTION":
            return {
                ...state,
                userDescription: action.userDescription
            }
        case "USER_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SUCCESS_AUNTEFICATION":
            return {
                ...state,
                isAuth: true
            }            
        default:
            return state
    }
}

