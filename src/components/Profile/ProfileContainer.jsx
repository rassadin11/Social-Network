import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { loadUserProfile, setUserProfile } from "../../redux/redux-store";
import Preloader from "../Preloader/Preloader";

let ProfileContainer = (props) => {
    useEffect(async () => {
        if (props.match === undefined) {
            return <Preloader />;
        }

        props.loadUserProfile(props.match)
    }, [props.match]);

    return <Profile {...props} />;
};

let mapStateToProps = (state, props) => ({
    profile: state.users.profile,
    match: props.match,
});

export default connect(mapStateToProps, { setUserProfile, loadUserProfile })(ProfileContainer);
