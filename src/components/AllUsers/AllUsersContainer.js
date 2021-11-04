import { connect } from "react-redux";
import AllUsers from "./AllUsers";
import {removeFriend, addFriend, setUsers} from '../../redux/redux-store'

let mapStatetoProps = (state) => {
    return {
        users: state.users,
        friends: state.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        mapRemoveFriend: (id) => {
            dispatch(removeFriend(id))
        },

        mapAddFriend: (user) => {
            dispatch(addFriend(user))
        },

        setUsers: (users) => {
            dispatch(setUsers(users))
        }
    }
}

const AllUsersContainer = connect(mapStatetoProps, mapDispatchToProps)(AllUsers)

export default AllUsersContainer;