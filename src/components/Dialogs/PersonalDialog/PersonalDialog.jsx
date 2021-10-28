import React from "react"
import cl from './PersonalDialog.module.scss';
import wolf from './images/wolf.jpg';
import {ReactComponent as Plane} from './images/plane.svg';
import PersonalMessage from "./PersonalMessage/PersonalMessage";
import {AddMessageToDialog} from "../../../redux/state";

const PersonalDialog = (props) => {
    let activeDialog = props.dialogs.filter(dialog => dialog.id === +props.match.params.id)[0]
    let textareaRef = React.createRef()

    const addNewMessage = (event) => {
        console.log(event.keyCode)
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault()
            props.dispatch(AddMessageToDialog(textareaRef.current.value, activeDialog.id, props.render))
            event.target.focus()
        }
    }

    const addNewMsg = () => {
        props.dispatch(AddMessageToDialog(textareaRef.current.value, activeDialog.id, props.render))
    }

    return (
        <div className={ cl.dialog }>
            <div className={ cl.highBar }>
                <img src={wolf} alt="#" className={ cl.image }/>
                <p className={ cl.authorName }>{activeDialog.name}</p>
            </div>
            <div className={ cl.previousMessages }>

                {/* {console.log(props.dialogs[0].all_messages)} */}
                {activeDialog.all_messages.map(message => <PersonalMessage message={message}/>)}
            </div>
            <div className={ cl.addMessage }>
                <textarea autoFocus onKeyDown={e => addNewMessage(e)} ref={textareaRef} className={ cl.textarea } placeholder="Введите сообщение"></textarea>
                <Plane onClick={addNewMsg} className={ cl.svgIcon }/>
            </div>
        </div>
    )
};

export default PersonalDialog;