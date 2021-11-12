import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { loadUserProfile, setUserProfile } from "../../redux/redux-store";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import { compose } from "redux";

let ProfileContainer = (props) => {
    useEffect(async () => {
        if (props.match === undefined) {
            return <Preloader />;
        }

        props.loadUserProfile(props.match)
    }, [props.match]);

    return <Profile {...props} />;
};

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

let mapStateToProps = (state, props) => ({
    profile: state.users.profile,
    match: props.match,
});

export default compose(connect(mapStateToProps, { setUserProfile, loadUserProfile }))(ProfileContainer)