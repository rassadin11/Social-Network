import SingleUser from "./SingleUser/SingleUser";
import cl from './AllUsers.module.scss'

const AllUsers = (props) => {
  return (
    <div className={ cl.usersFlex }>
      <div className={ cl.users }>
        {props.users.map(user => <SingleUser user={user} friends={props.friends} mapRemoveFriend={props.mapRemoveFriend} mapAddFriend={props.mapAddFriend}/>)}
      </div>
      <div className={ cl.filters }>
        FILTERS
      </div>
    </div>

  )
};

export default AllUsers;