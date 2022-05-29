import React from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignSesion from '../Hooks/useSignSesion';
import useCreateUser from '../../firebase/auth/useCreateUser';
import BotonSignIn from '../Botons/BotonSignIn';


function ModalSingIn(props) {
    const { handleShow, show, handleClose }=useSignSesion();
    const { crearUsuario } = useCreateUser();

  return (<>
    <BotonSignIn handleShow={handleShow} />
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicio de Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                  {props.signUser}
                  {props.botonGoogle}
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
  )
}

export default ModalSingIn