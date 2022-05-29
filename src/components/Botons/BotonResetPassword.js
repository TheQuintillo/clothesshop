import React from 'react';
import "../../css/header.css";

function BotonResetPassword(props) {
  return (
    <><a href='http://localhost:3000' onClick={props.resetPassword}>Cambiar contraseña</a><div className='send_email'></div></>
  )
}

export default BotonResetPassword