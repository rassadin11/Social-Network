import React from "react"
import { AddPostActionCreator } from '../../../redux/redux-store'
import ProfileForm from './ProfileForm'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => { dispatch(AddPostActionCreator(text)) }
    }
}

const ProfileFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileForm)

export default ProfileFormContainer;