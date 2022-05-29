import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSignSesion from './Hooks/useSignSesion';
import '../css/header.css';
import ModalSingIn from './SignIn/ModalSingIn';
import PanelUserSignIn from './SignIn/PanelUserSignIn';
import BotonCloseSesion from './Botons/BotonCloseSesion';
import BotonGoogle from './Botons/BotonGoogle';
import BotonDeleteAccount from './Botons/BotonDeleteAccount';
import BotonResetPassword from './Botons/BotonResetPassword';
import BotonSignUser from './Botons/BotonSignUser';

function SignIn() {
const { user, closeSesion, GoogleAuth, userDelete, resetPassword, SignUser, handleChangeEmail, handleChangePassword }=useSignSesion();


  return (
    user?(<>
            <BotonCloseSesion close={closeSesion} />
            <PanelUserSignIn 
            deleteAccount={<BotonDeleteAccount deleteAccount={userDelete} />} 
            resetPassword={<BotonResetPassword resetPassword={resetPassword} />}
            />
            </>)
            :(<ModalSingIn 
            botonGoogle={<BotonGoogle authGoogle={GoogleAuth} text="Iniciar Sesión con Google"></BotonGoogle>} 
            signUser={<BotonSignUser signUser={SignUser} handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword}  />}  
            />))
}

export default SignIn