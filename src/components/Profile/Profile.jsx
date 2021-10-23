import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import './Profile.scss';

const Profile = props => {
  return (
    <div class="main">
      <ProfileInfo/>
      <Posts/>
    </div>
  )
}

window.onload = () => {
}
 
export default Profile