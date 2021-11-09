import React from "react"
import cl from './ProfileForm.module.scss'
 
const ProfileForm = (props) => {

    let newPostElement = React.createRef()

    let addPost = (e) => {
        e.preventDefault()
        let text = newPostElement.current.value
        props.addNewPost(text)
        newPostElement.current.value = ''
    }

    return (
        <form action="#" className={ cl.form }>
            <textarea ref={newPostElement} cols="20" rows="4" placeholder="Оставьте сообщение в профиле пользователя" className={ cl.textarea }></textarea>
            <button onClick={e => addPost(e) } className={ cl.button }>Добавить сообщение</button>
        </form>
    )
};

export default ProfileForm;