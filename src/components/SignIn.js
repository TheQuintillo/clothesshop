import React from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignSesion from './Hooks/useSignSesion';

function SignIn() {

  const { handleChangeEmail, handleChangePassword, SignUser, show, handleClose, handleShow, signin, closeSesion }=useSignSesion();

  return (
        (signin? <li className='menu_show'><a href="localhost:3000" className='link_li'>Mi Cuenta</a>
        <ul className='submenu'>
          <li><a href="localhost:3000">Configuración</a></li>
          <li><a href="localhost:3000" onClick={closeSesion}>Cerrar Sesión</a></li>
        </ul>
      </li>:<><li className='menu_show'><a href="localhost:3000" className='link_li' onClick={handleShow}>Iniciar Sesión</a></li>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicio de Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body><Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChangeEmail} type="email" placeholder="Ingresa tu Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChangePassword} type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar Usuario" />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={SignUser}>
                    Iniciar Sesión
                  </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary">
              Regístrate
            </Button>
          </Modal.Footer>
        </Modal>
      </>
         )
  )
}

export default SignIn