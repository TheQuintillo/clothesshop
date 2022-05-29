import React from 'react';
import "../../css/header.css"

function BotonSignIn(props) {

  return (
    <>
    <li className='menu_show'><a href="localhost:3000" className='link_li' onClick={props.handleShow}>Iniciar Sesión</a></li>
    </>
  )
}

export default BotonSignIn