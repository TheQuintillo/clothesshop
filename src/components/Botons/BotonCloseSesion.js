import React from 'react';
import "../../css/header.css";

function BotonCloseSesion(props) {
  return (<>
    <li className='menu_show'><a href="http://localhost:3000" className='link_li'>Mi Cuenta</a>
      <ul className='submenu'>
        <li><a href="localhost:3000" onClick={()=>{let config_close = document.querySelector('.panel_user_container');
        config_close.classList.remove('configClose');
          config_close.classList.add('panel_user_show');
                  }}>Configuración</a></li>
        <li><a href="localhost:3000" onClick={props.close}>Cerrar Sesión</a></li>
      </ul>
    </li>
    </>
  )
}

export default BotonCloseSesion