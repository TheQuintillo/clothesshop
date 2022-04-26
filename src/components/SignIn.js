import React, { useState } from 'react';

function SignIn() {

const [signin, setSignin] = useState(null);

  return (
        (signin? <li className='menu_show'><a href="localhost:3000" className='link_li'>Mi Cuenta</a>
        <ul className='submenu'>
          <li><a href="localhost:3000">Configuración</a></li>
          <li><a href="localhost:3000">Cerrar Sesión</a></li>
        </ul>
      </li>:<li className='menu_show'><a href="localhost:3000" className='link_li'>Iniciar Sesión</a>
        </li>)
         )
}

export default SignIn