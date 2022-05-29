import React from 'react';
import useSignSesion from '../Hooks/useSignSesion';
import PanelAdmin from '../admin/PanelAdmin';
import '../../css/header.css';
import usePanelAdmin from '../Hooks/usePanelAdmin';

function PanelUserSignIn(props) {
    const { cookies, emailUpdate}=useSignSesion();
    const { admin, adminPanel} = usePanelAdmin();

    adminPanel();
    const userProfile = cookies.get("token");
    console.log(userProfile)
    
  return (<>
    
    <div className='panel_user_container configClose'>
    <h1>Configuración de Cuenta</h1>
    <div className='user_image'>

    </div>
    <div className='name'>
      <p>{userProfile.name}</p><img src={userProfile.photo} alt="user_photo"></img>
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
            {props.resetPassword}
        </li>
        <li>
            <a href='http://localhost:3000'>Volver a enviar correo de confirmación</a>
        </li>
        {admin && <PanelAdmin />}
        <li>
            {props.deleteAccount}
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