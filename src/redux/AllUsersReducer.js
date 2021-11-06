let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    activePage: 1,
    isFetching: false,
    profile: null,
};

export const AllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            state = {
                ...state,
                users: action.users,
                pageSize: action.pageSize,
                totalUsersCount: action.totalUsersCount,
                activePage: action.activePage,
            };

            return state;

        case "CHANGE_PAGE":
            return {
                ...state,
                activePage: action.activePage,
            };

        case "CHANGE_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };

        case "FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };

        case "CHANGE_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};
