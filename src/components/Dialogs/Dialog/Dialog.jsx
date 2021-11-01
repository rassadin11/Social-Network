import React from "react"
import cl from './Dialog.module.scss';
import { NavLink } from "react-router-dom";
import { removeDialog } from "../../../redux/redux-store";
import wolf from './Images/wolf.jpg';

const Dialog = (props) => {

    let removePersonalDialog = (e, id) => {
        e.preventDefault()
        props.dispatch(removeDialog(props.all_dialogs.filter(dialog => dialog.id !== id), props.rerenderEntireTree))
    }

    return (
        <NavLink to={"/messages/" + props.id} style={{ textDecoration: 'none' }}>
            <div className={cl.wrapper}>
                <div className={cl.picture}>
                    <img src={wolf} alt="#" className={cl.image} />
                </div>
                <div className={cl.mainContent}>
                    <p className={cl.author}>{props.name}</p>
                    <p className={cl.content}>{props.last_message}</p>
                </div>
                <div className={cl.button}>
                    <button preventDefault onClick={e => removePersonalDialog(e, props.id)}>
                        Delete chat
                    </button>
                </div>
            </div>
        </NavLink>
    )
};

export default Dialog;