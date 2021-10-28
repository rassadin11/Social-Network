import React from "react"
import cl from './ProfileForm.module.scss'
import { AddPostActionCreator } from '../../../redux/state'
 
const ProfileForm = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.dispatch(AddPostActionCreator(text, props.rerenderEntireTree))
        newPostElement.current.value = ''
    }

    return (
        <form action="#" className={ cl.form }>
            <textarea ref={newPostElement} cols="20" rows="4" placeholder="Введите сообщение" className={ cl.textarea }></textarea>
            <button onClick={ addPost } className={ cl.button }>Добавить сообщение</button>
        </form>
    )
};

export default ProfileForm;