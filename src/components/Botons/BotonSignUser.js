import React from 'react';
import { Button, Form } from 'react-bootstrap';

function BotonSignUser(props) {
  
    return (<>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={props.handleChangeEmail} type="email" placeholder="Ingresa tu Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={props.handleChangePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordar Usuario" />
  </Form.Group>
    <Button variant="primary" type="submit" onClick={props.signUser}>Iniciar Sesión</Button>
    </>
  )
}

export default BotonSignUser