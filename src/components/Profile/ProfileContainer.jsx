import React, { useEffect } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/redux-store";
import Preloader from "../Preloader/Preloader";

let ProfileContainer = (props) => {
    useEffect(async () => {
        if (props.match === undefined) {
            return <Preloader />;
        }

        await axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${props.match}`, {
                    withCredentials: true,
                }
            )
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [props.match]);

    return <Profile {...props} />;
};

let mapStateToProps = (state, props) => ({
    profile: state.users.profile,
    match: props.match,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
