import React from "react"
import cl from './NewsBody.module.scss'
import wildberries from './images/wildberries.jpg'

const NewsBody = (props) => {
  return (
    <div className={ cl.wrapper }>
      <img src={wildberries} alt="" className={ cl.icon }/>
      <div className={ cl.componentsBody }>
        <p className={ cl.title }>About wildrebbries</p>
        <p className={ cl.paragraph }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
    </div>
  )
};

export default NewsBody;