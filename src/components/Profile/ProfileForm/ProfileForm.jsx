import React from "react"
import cl from './ProfileForm.module.scss'

const ProfileForm = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
        newPostElement.current.value = ''
    }

    return (
        <form action="#" className={ cl.form }>
            <textarea ref={newPostElement} cols="20" rows="4" placeholder="Введите сообщение" className={ cl.textarea }></textarea>
            <button onClick={() => { addPost() }} className={ cl.button }>Добавить сообщение</button>
        </form>
    )
};

export default ProfileForm;