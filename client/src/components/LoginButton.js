import React from "react";
import { Button } from 'reactstrap';

const LoginButton = () => {
  return (
    <Button
      className="btn btn-info btn-block"
      href='/login'
    >
      Log In
    </Button>
  );
};

export default LoginButton;