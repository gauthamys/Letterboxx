import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import React, { useState } from 'react';

const AuthButton = () => {
  const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user'))[0] : null
  return user ? <LogoutButton/> : <LoginButton />;
};

export default AuthButton;