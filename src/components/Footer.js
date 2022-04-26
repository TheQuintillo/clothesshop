import React from 'react';
import "../css/footer.css"

function Footer() {
  return (
    <footer>
      <div className='suscribe'>
        <div className='suscribe_offer'>
          <h4>NUEVAS OFERTAS PARA SUSCRIPTORES</h4>
          <p>Suscríbete para obtener descuentos hasta del 20% en sus productos</p>
        </div>
        <div className='form_suscribe'>
          <input type="text" placeholder='Tu email'></input>
          <input type="submit" value="SUSCRÍBETE"></input>
        </div>
      </div>
      <div className='social'>
        <div className='contact'>
          <h5>FAQs</h5>
          <h5>Contacta</h5>
        </div>
        <div className='social_media'>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer