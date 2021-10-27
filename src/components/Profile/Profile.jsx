import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileForm from './ProfileForm/ProfileForm';
import './Profile.scss';

const Profile = props => {
  return (
    <div class="main">
      <ProfileInfo/>
<<<<<<< HEAD
      <ProfileForm/>
      <Posts/>
=======
      <Posts ps={props.posts}/>
>>>>>>> update
    </div>
  )
}
 
export default Profile