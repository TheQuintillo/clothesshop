import React, { useState } from 'react';
import Upload from '../../firebase/storage/Upload';

function PanelAdmin() {
    const [signin, setSignin] = useState(true);
    const [admin, setAdmin] = useState(true);

  return (
    (signin && admin?<div>
        <h1>PANEL ADMINISTRADOR</h1>
        <Upload />
    </div>:<></>)
  )
}

export default PanelAdmin