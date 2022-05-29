import React from 'react';

function BotonGoogle(props) {
  return (
    <><button onClick={props.authGoogle}>{props.text}</button></>
  )
}

export default BotonGoogle