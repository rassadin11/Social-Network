import React, {useEffect} from "react"
import cl from './PersonalDialog.module.scss';
import wolf from './images/wolf.jpg';
import {ReactComponent as Plane} from './images/plane.svg';
import PersonalMessage from "./PersonalMessage/PersonalMessage";
import {AddMessageToDialog} from "../../../redux/redux-store";

const PersonalDialog = (props) => {
    let activeDialog = props.dialogs.filter(dialog => dialog.id === props.match)[0]
    let textareaRef = React.createRef()

    useEffect(() => {
        document.querySelector(".PersonalDialog_previousMessages__3ErWt").scrollTop = document.querySelector(".PersonalDialog_previousMessages__3ErWt").scrollHeight
    })

    const addNewMessage = (event) => {
        
        if (!textareaRef.current.value.length && event.keyCode === 13) {
            event.preventDefault()
            return
        };

        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()
            props.updateNewPostText(event, textareaRef.current.value, activeDialog.id)
            event.target.focus()
        }
    }

    return (
        <div className={ cl.dialog }>
            <div className={ cl.highBar }>
                <img src={wolf} alt="#" className={ cl.image }/>
                <p className={ cl.authorName }>{activeDialog.name}</p>
            </div>
            <div className={ cl.previousMessages }>
                {activeDialog.all_messages.map(message => <PersonalMessage message={message}/>)}
            </div>
            <div className={ cl.addMessage }>
                <textarea autoFocus onKeyDown={e => addNewMessage(e)} ref={textareaRef} className={ cl.textarea } placeholder="Введите сообщение"></textarea>
                <Plane onClick={() => props.addNewMsg(textareaRef.current.value, activeDialog.id)} className={ cl.svgIcon }/>
            </div>
        </div>
    )
};

export default PersonalDialog;