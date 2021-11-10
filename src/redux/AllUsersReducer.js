let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    activePage: 1,
    profile: null,
    isFetching: false,
    followingInProgress: false,
};

export const AllUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.users,
                pageSize: action.pageSize,
                totalUsersCount: action.totalUsersCount,
                activePage: action.activePage,
            };

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
        
        case "FOLLOWING-IN-PROGRESS":
            return {
                ...state, 
                followingInProgress: action.followingInProgress,
            }
        default:
            return state;
    }
};
