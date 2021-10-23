import React from 'react';
import cl from './Post.module.scss';

const Post = props => {
  return (
    <div className={ cl.post }>
        <div className={ cl.avatar }></div>
        <div className={ cl.content }>
            <p className={ cl.title }>{props.title}</p>
            <p className={ cl.text }>{props.ctx}</p>
        </div>
    </div>
  )
}

export default Post