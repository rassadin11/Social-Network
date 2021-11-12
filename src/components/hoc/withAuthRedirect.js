import { connect } from "react-redux";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component, props) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login'/>;

        return (
            <Component {...props}/>
        )
    }
    
    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    
    return ConnectedAuthRedirectComponent
}