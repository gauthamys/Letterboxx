import Profile from './components/Profile';
import ErrProfile from './components/ErrProfile';

import React from 'react';


const AuthProfile = ({ user }) => {
  //const user = JSON.parse(localStorage.getItem('user'))[0];
  return user ? <Profile user={user}/> : <ErrProfile />;
};

export default AuthProfile;