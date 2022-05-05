import { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

function useSignSesion() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [signin, setSignin] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUser = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    console.log(userCredential)
    const user = userCredential.user;
    // ...
    if(user.accessToken){setSignin(true)}else{return}
    console.log(userCredential);
    console.log(user);
    console.log(signInWithEmailAndPassword);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    if(errorCode == "auth/user-not-found" || "auth/invalid-email"){
    alert("USUARIO O CONTRASEÑA INCORRECTOS");
    }
  });

}

const closeSesion = (e) => {
  e.preventDefault();

signOut(auth).then(() => {
  // Sign-out successful.
  if(auth){
    setSignin(false);
  }

  console.log(auth)
}).catch((error) => {
  // An error happened.
});
}

const handleChangeEmail = ({ target: { value } }) => {
  setEmail(value);
}
const handleChangePassword = ({ target: { value } }) => {
  setPassword(value);
}
  return (
    {handleChangeEmail, handleChangePassword, SignUser, show, handleClose, handleShow, email, password, signin, closeSesion}
  )
}

export default useSignSesion