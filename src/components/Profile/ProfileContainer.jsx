import axios from "axios";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import { changeProfile } from "../../redux/redux-store";
import Profile from "./Profile";

const ProfileContainer = (props) => {
    useEffect(() => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${props.match}`
            )
            .then((response) => response.data);
        
        console.log('ok')
    }, []);

    return (
        <Profile/>
    )
};

let mapStateToProps = (state) => ({
    profile: state.users.profile
})

let mapDispatchToProps = (dispatch) => ({
    changeProfile: (profile) => {
        dispatch(changeProfile(profile))
    }
})

const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

export default UserProfileContainer;
