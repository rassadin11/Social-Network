import React, { useEffect } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/redux-store";

let ProfileContainer = (props) => {
    
    useEffect(async () => {
        await axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${props.match}`)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, []);
    
    return <Profile {...props} />;
};

let mapStateToProps = (state) => ({
    profile: state.users.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
