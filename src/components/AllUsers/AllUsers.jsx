import { useEffect } from 'react'
import SingleUser from "./SingleUser/SingleUser";
import cl from './AllUsers.module.scss'
import * as axios from 'axios'

const AllUsers = (props) => {

  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => props.setUsers(response.data.items))
  })

  return (
    <div className={cl.usersFlex}>
      <div className={cl.users}>
        {props.users.map(user => <SingleUser key={user.id} user={user} friends={props.friends} mapRemoveFriend={props.mapRemoveFriend} mapAddFriend={props.mapAddFriend} />)}
        <div className={ cl.links }>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </div>
      </div>
      <div className={cl.filters}>
        FILTERS
      </div>
    </div>
  )
};

export default AllUsers;