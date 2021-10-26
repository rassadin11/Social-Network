import React from "react"
import Friend from "./Friend/Friend";

const Friends = ({friends}) => {
  return (
    <div>
      {friends.map(friend => <Friend friend={friend} />)}
    </div>
  )
};

export default Friends;