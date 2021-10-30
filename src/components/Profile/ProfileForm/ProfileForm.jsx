import React from "react"
import cl from './ProfileForm.module.scss'
import { AddPostActionCreator } from '../../../redux/store'
 
const ProfileForm = (props) => {

    let newPostElement = React.createRef()

    let addPost = (e) => {
        e.preventDefault()
        let text = newPostElement.current.value
        props.dispatch(AddPostActionCreator(text, props.rerenderEntireTree))
        newPostElement.current.value = ''
    }

    return (
        <form action="#" className={ cl.form }>
            <textarea ref={newPostElement} cols="20" rows="4" placeholder="Введите сообщение" className={ cl.textarea }></textarea>
            <button onClick={e => addPost(e) } className={ cl.button }>Добавить сообщение</button>
        </form>
    )
};

export default ProfileForm;