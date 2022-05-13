import React from 'react';
import "../css/main.css";
import { useSearchFile } from "../firebase/hooks/useSearchFile";

function Main() {
  const { refreshGalery } = useSearchFile();
  refreshGalery();
  return (
    <div className='container_main'>
  <div className='image_offer'>
    <div className='image_offer_text'>
      <h4>NUEVA COLECCIÓN DE VERANO 2022</h4>
      <h1>DESCUENTO HASTA EL 30% EN TODOS LOS ARTICULOS</h1>
      <a href="localhost:3000">COMPRAR AHORA</a>
    </div>
  </div>
  <div className='sections'>
    <div className='section_women'>
      <a href="localhost:3000">MUJER</a>
    </div>
    <div className='section_accesories'>
      <a href="localhost:3000">ACCESORIOS</a>
    </div>
    <div className='section_men'>
      <a href="localhost:3000">HOMBRE</a>
    </div>
  </div>
  <div className='new_articles'>
    <h1>Nuevos Artículos</h1>
    <div className='line'></div>
    <nav>
      <ul className='list_search_section'>
        <li className='section_active link_search_section'><a href="localhost:3000">TODO</a></li>
        <li className='link_search_section'><a href="localhost:3000">MUJER</a></li>
        <li className='link_search_section'><a href="localhost:3000">ACCESORIOS</a></li>
        <li className='link_search_section'><a href="localhost:3000">HOMBRE</a></li>
      </ul>
    </nav>
  </div>
  <div className='grid_search_section'>
  </div>
  <div className='offer_week'>
    <div className='offer_week_text'>
      <h1>OFERTA DE LA SEMANA</h1>
      <a href="localhost:3000">COMPRAR AHORA</a>
    </div>
  </div>
  <div className='best_sellers'>
    <h1>LO MÁS VENDIDO</h1>
    <div className='line'></div>
    <div className='best_sellers_grid'>

    </div>
  </div>
  <div className='option_shop'>
    <div className='transport'>
      <h6>SE LO DEJAMOS EN CASA</h6>
    </div>
    <div className='money'>
      <h6>SEGURO Y FÁCIL DE PAGAR</h6>
    </div>
    <div className='return'>
      <h6>14 DÍAS PARA SU DEVOLUCIÓN</h6>
    </div>
    <div className='open_hour'>
      <h6>ABIERTO TODA LA SEMANA</h6>
    </div>
  </div>
</div>
  )
}

export default Main