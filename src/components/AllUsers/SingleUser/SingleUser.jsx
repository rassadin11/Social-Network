import React from "react"
import cl from './SingleUser.module.scss'
import manchester from '../images/manchester.jpg';

const SingleUser = (props) => {

  const removeFriend = (id) => {
    props.mapRemoveFriend(id)
  }

  const addFriend = (user) => {
    props.mapAddFriend(user)
  }

  return (
    <div className={cl.mainContent}>
      <div className={cl.user}>
        <div className={cl.userWrapper}>
          <img src={manchester} alt="" className={cl.userImage} />
        </div>
        <div className={cl.userInfo}>
          <p className={cl.name}>{props.user.name}</p>
          <p className={cl.address}>{props.user.country} / {props.user.city}</p>
        </div>
        <div className={cl.serverInfo}>
          <p className={cl.dateCreated}>{props.user.date_created}</p>
          <p className={cl.friends}>Друзья: {props.user.friends}</p>
          {
            props.friends.filter(friend => friend.id === props.user.id).length > 0
            ? <button onClick={() => removeFriend(props.user.id)} className={cl.addFriend}>Удалить из друзей</button>
            : <button onClick={() => addFriend(props.user)} className={cl.addFriend}>Добавить в друзья</button>
          }

        </div>
      </div>
    </div>
  )
};

export default SingleUser;