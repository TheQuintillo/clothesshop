import React, { useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignSesion from './Hooks/useSignSesion';
import useCreateUser from '../firebase/auth/useCreateUser';
import '../css/header.css';
import PanelAdmin from './admin/PanelAdmin';

function SignIn(props) {
  
  const [pulsado, setPulsado] = useState(false);
  const { handleChangeEmail, handleChangePassword, cookies, name, photo,SignUser, show, handleClose, handleShow, signin, closeSesion, resetPassword, emailUpdate, userDelete, GoogleAuth }=useSignSesion();
  const { crearUsuario } = useCreateUser();
  console.log(cookies.get("token"));

  const register = () =>{
    if(pulsado){
     return <><Form>
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
   </Form></>
    }else{
     return <>
      <Button variant="secondary" onClick={handleClose}>
          Cerrar
      </Button>
      <Button variant="primary" onClick={()=>{setPulsado(true)}}>
          Regístrate
      </Button>
    </>
    }
  }



  const panel = () => {
    if(signin){
      return <><li className='menu_show'><a href="localhost:3000" className='link_li'>Mi Cuenta</a>
      <ul className='submenu'>
        <li><a href="localhost:3000" onClick={()=>{let config_close = document.querySelector('.panel_user_container');
        config_close.classList.remove('configClose');
          config_close.classList.add('panel_user_show');
                  }}>Configuración</a></li>
        <li><a href="localhost:3000" onClick={() => {closeSesion()}}>Cerrar Sesión</a></li>
      </ul>
    </li>
    <div className='panel_user_container configClose'>
    <h1>Configuración de Cuenta</h1>
    <div className='user_image'>

    </div>
    <div className='name'>
      <p>{name}</p><img src={photo} alt="user_photo"></img>
    </div>
        <ul>
        <li>
            <a href='http://localhost:3000'>Actualizar nombre y foto de perfil</a>
            <div>
            <form>
            <input type="text" className="input_name"></input>
            <input type="file" className="input_image"></input>
            <button type="submit">Enviar</button>
            </form>
            </div>
        </li>
        <li>
            <a href='http://localhost:3000'>Actualizar email</a>
            <form>
            <input type="email" className="input_email_new"></input>
            <input type="email" className="input_email"></input>
            <button type="submit" onClick={emailUpdate}>Enviar</button>
            </form>
            <div className='emailUpdate'></div>
        </li> 
        <li>
            <a href='http://localhost:3000' onClick={resetPassword}>Cambiar contraseña</a>
            <div className='send_email'></div>
        </li>
        <li>
            <a href='http://localhost:3000'>Volver a enviar correo de confirmación</a>
        </li>
        <PanelAdmin />
        <li>
            <a href='http://localhost:3000' onClick={userDelete}>Borrar Cuenta</a>
        </li>
        </ul>
        <button onClick={()=>{let config_close = document.querySelector('.panel_user_container');
        config_close.classList.remove('panel_user_show');
          config_close.classList.add('configClose');
                  }}>Cerrar</button>
    </div></>
    }else{return}
  }

  return (
    signin?( <>{panel()}</>):(<><li className='menu_show'><a href="localhost:3000" className='link_li' onClick={handleShow}>Iniciar Sesión</a></li>
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
            {register()}
          </Modal.Footer>
        </Modal> 
      </>
      ))
}

export default SignIn