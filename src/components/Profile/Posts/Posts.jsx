import React from 'react';
import Post from './Post/Post';
import cl from './Posts.module.scss';

const Posts = props => {

  let posts = [
    {id: 1, title: 'My first notice', ctx: "Hello my sister!"},
    {id: 2, title: 'Answer from my sister', ctx: "Hello my brother!"},
  ]

  return (
    <div className={ cl.posts }>
        {posts.map(post => <Post key={post.id} title={post.title} ctx={post.ctx}/>)}
    </div>
  )
}
 
export default Posts