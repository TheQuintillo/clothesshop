import React from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignSesion from '../Hooks/useSignSesion';
import useCreateUser from '../../firebase/auth/useCreateUser';
import PanelUserSignIn from '../SignIn/PanelUserSignIn';

function ModalSingIn() {
    const { handleChangeEmail, cookies,handleShow, handleChangePassword, SignUser, show, handleClose, GoogleAuth, signin }=useSignSesion();
    const { crearUsuario } = useCreateUser();
    console.log(cookies.get("token"));
  return (
    signin ? (<PanelUserSignIn />): (<>
    <li className='menu_show'><a href="localhost:3000" className='link_li' onClick={handleShow}>Iniciar Sesión</a></li>
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicio de Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
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
                  <Button className="mx-3 bg-danger" variant="primary" type="submit" onClick={GoogleAuth}>
                    Iniciar Sesión con Google
                  </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email</Form.Label>
       <Form.Control className="email" type="email" placeholder="Introduce tu Email" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control className="password" type="password" placeholder="Password" />
     </Form.Group>
     <Button  variant="secondary" onClick={handleClose}>
       Cerrar
     </Button>
     <Button className="mx-3" variant="primary" type="submit" onClick={crearUsuario}>
       Registrarse
     </Button>
   </Form>
    </Modal.Footer>
    </Modal> 
        </>
  ))
}

export default ModalSingIn