import React from 'react';
import "../css/header.css";
import SignIn from './SignIn';



function Header() {

  return (
    <header>
      <div className='section_user'>
        <h4>BIENVENIDOS A CLOTHES SHOP PANEL</h4>
      <div className='section_panel'>
        
        <ul className='menu_general'>
          <li className='menu_show'><a href="localhost:3000" className='link_li'>Idioma</a>
            <ul className='submenu'>
              <li><a href="localhost:3000">Español</a></li>
              <li><a href="localhost:3000">English</a></li>
            </ul>
          </li>
          <SignIn />
        </ul>
      </div>
      </div>
      <div className='nav_container'>
      <div className='nav'>
        <img src="" alt="logo"/>
        <nav>
          <ul>
            <li><a href="localhost:3000">HOME</a></li>
            <li><a href="localhost:3000">TIENDA</a></li>
            <li><a href="localhost:3000">PROMOCIÓN</a></li>
            <li><a href="localhost:3000">CONTACTA</a></li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header