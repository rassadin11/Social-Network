import React from 'react';
import Post from './Post/Post';
import cl from './Posts.module.scss';

const Posts = ({ps}) => {
  return (
    <div className={ cl.posts }>
        {ps.map(post => <Post key={post.id} name={post.name} ctx={post.ctx}/>)}
    </div>
  )
}
 
export default Posts