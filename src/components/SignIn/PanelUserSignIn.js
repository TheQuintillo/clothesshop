import React from 'react';
import useSignSesion from '../Hooks/useSignSesion';
import PanelAdmin from '../admin/PanelAdmin';
import '../../css/header.css';
import usePanelAdmin from '../Hooks/usePanelAdmin';

function PanelUserSignIn() {
    const { cookies, closeSesion, resetPassword, emailUpdate, userDelete, GoogleAuth }=useSignSesion();
    const { admin, adminPanel} = usePanelAdmin();

    adminPanel();
    const user = cookies.get("token");
    

  return (
    <>
    <li className='menu_show'><a href="http://localhost:3000" className='link_li'>Mi Cuenta</a>
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
      <p>{user.name}</p><img src={user.photo} alt="user_photo"></img>
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
        {admin && <PanelAdmin />}
        <li>
            <a href='http://localhost:3000' onClick={userDelete}>Borrar Cuenta</a>
        </li>
        </ul>
        <button onClick={()=>{let config_close = document.querySelector('.panel_user_container');
        config_close.classList.remove('panel_user_show');
          config_close.classList.add('configClose');
                  }}>Cerrar</button>
    </div>
    </>
  )
}

export default PanelUserSignIn