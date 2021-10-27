import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileForm/ProfileForm';
import './Profile.scss';

const Profile = props => {
  return (
    <div class="main">
      <ProfileInfo/>
      <ProfileForm/>
      <Posts/>
    </div>
  )
}

window.onload = () => {
}
 
export default Profile