import React from 'react';
import Posts from './Posts/Posts';
import ProfileFormContainer from './ProfileForm/ProfileFormContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.scss';

const Profile = props => {
  return (
    <div class="main">
      <ProfileInfo/>
      <ProfileFormContainer dispatch={props.dispatch}/>
      <Posts ps={props.posts}/>
    </div>
  )
}
 
export default Profile 