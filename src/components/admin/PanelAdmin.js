import React from 'react';
import Upload from '../../firebase/storage/Upload';
import usePanelAdmin from '../Hooks/usePanelAdmin';


  

function PanelAdmin() {
    
    const {admin, adminPanel}=usePanelAdmin();

  return (
    admin?(<div className='panel_admin'>
        <h1>PANEL ADMINISTRADOR</h1>
        <Upload />
    </div>
  ):(<li><button onClick={adminPanel}>Panel del Administrador</button></li>))
}

export default PanelAdmin