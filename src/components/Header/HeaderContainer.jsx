import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setData, isFetch, userDescription, loadUserInfo } from '../../redux/redux-store'
import Preloader from "../Preloader/Preloader";

let HeaderContainer = (props) => {

    useEffect(async () => {
        props.loadUserInfo()
    }, [])

    if (props.auth.info === undefined) {
        return <Preloader />
    }

    return (
        <Header {...props} login={props.auth.info.login} email={props.auth.info.email} resultCode={props.auth.resultCode} />
    )
}

let mapStateToProps = (state, props) => ({
    setBurger: props.setBurger,
    burger: props.burger,
    auth: state.auth,
})

export default connect(mapStateToProps, { setData, isFetch, userDescription, loadUserInfo })(HeaderContainer)