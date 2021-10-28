import React from 'react';
import cl from './Post.module.scss';
import wolf from './Images/wolf.jpg'

const Post = props => {
  return (
    <div className={ cl.post }>
        <div>
          <img src={wolf} className={ cl.avatar } alt="#" />
        </div>
        <div className={ cl.content }>
            <p className={ cl.title }>{props.name}</p>
            <p className={ cl.text }>{props.ctx}</p>
        </div>
    </div>
  )
}

export default Post