import React, { useEffect } from 'react';
import Posts from './Posts/Posts';
import ProfileFormContainer from './ProfileForm/ProfileFormContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.scss';
import axios from 'axios';

const Profile = props => {
  
  return (
    <div className="main">
      <ProfileInfo/>
      <ProfileFormContainer/>
      <Posts/>
    </div>
  )
}

export default Profile 