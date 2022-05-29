import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignSesion from './Hooks/useSignSesion';
import '../css/header.css';
import ModalSingIn from './SignIn/ModalSingIn';
import PanelUserSignIn from './SignIn/PanelUserSignIn';

function SignIn() {
  
  const { cookies, signin}=useSignSesion();
  console.log(cookies.get("token"));

  return (
    signin?(<PanelUserSignIn />):(<ModalSingIn />))
}

export default SignIn