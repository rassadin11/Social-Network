import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setData, isFetch, userDescription } from '../../redux/redux-store'
import Preloader from "../Preloader/Preloader";
import { AuthAPI } from "../../api/api";

let HeaderContainer = (props) => {

    useEffect(async () => {
        props.isFetch(true)

        AuthAPI.authMe()
            .then(response => {
                return props.setData(response.data, response.resultCode)
            })
            .then((data) => {
                AuthAPI.myProfile(data).then(response => {
                    props.userDescription(response.data)
                })
            })

        props.isFetch(false)
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

export default connect(mapStateToProps, { setData, isFetch, userDescription })(HeaderContainer)