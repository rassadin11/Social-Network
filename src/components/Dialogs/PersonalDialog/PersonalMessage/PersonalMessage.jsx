import React from "react"
import cl from './PersonalMessage.module.scss';
import avatar from '../images/avatar.jpg';
import wolf from '../images/wolf.jpg';

const PersonalMessage = (props) => {
  return (
    <div className={ cl.wrapper }>
      <div className={ cl.icon }>
          {props.message.author === 'Artyom' ? <img src={avatar} alt="" /> : <img src={wolf} alt="" />}
          
      </div>
      <div className={ cl.messageBody }>
          <p className={ cl.author }>{props.message.author}</p>
          <p className={ cl.text }>{props.message.text_message}</p>
      </div>
    </div>
  )
};

export default PersonalMessage;