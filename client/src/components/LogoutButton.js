import React from "react";
import { Button } from 'reactstrap';
 
const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }
  return (
    <Button className="btn btn-danger btn-block" onClick={()=>logout()}>
      Log Out
    </Button>
  );
};

export default LogoutButton;