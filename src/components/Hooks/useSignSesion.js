import { useState } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword, signOut, updateEmail, sendPasswordResetEmail, deleteUser, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import Cookies from 'universal-cookie';
const cookies = new Cookies();



function useSignSesion() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);


  const SignUser = (e) =>{
    e.preventDefault();
    //MIRAR POQUE NO DEJA PONER NOMBRE DE EMAIL
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    
    if(user.accessToken){
      cookies.set("token", {token: user.accessToken, name: user.email, photo: ""}, {path: "/", secure:true, expires: new Date("2022-07-01")});
    }else{return}
    console.log(user);

    setUser(true);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    if(errorCode === "auth/user-not-found" || "auth/invalid-email"){
    alert("USUARIO O CONTRASEÑA INCORRECTOS");
    }
  });
  }

  const GoogleAuth = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
  .then(async (result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    cookies.set("token", {token: token, name: user.displayName, photo: user.providerData[0].photoURL}, {path: "/", secure:true, expires: new Date("2022-07-01")});
    console.log(user);
    setUser(true);
      const q = query(collection(db, "user"));
            const unsubscribe = await getDocs(q);
            const register = unsubscribe.docs.find(el => el._key.path.segments[6] === user.uid)
              
              if(register === undefined){
                try { 
                //AGREGAR ARCHIVO CON ID Y CAMPOS A LA COLECCION 
                setDoc(doc(db, "user", user.uid), {
                    user: user.email,
                    rol: "user",
                  });
                  cookies.set("token", {token: token, name: user.displayName, photo: user.providerData[0].photoURL}, {path: "/", secure:true, expires: new Date("2022-07-01")});
                  setUser(true);
                  // LEER  TODOS LOS ARCHIVOS DE COLECCION 1mera forma
                }catch (e) {
                    console.error("Error adding document: ", e);
                }
              }else{return}
            
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log(errorCode, errorMessage, email, credential);
    // ...
  });

  }

  const emailUpdate = (e) => {
    e.preventDefault();
    const input_updateEmail = document.querySelector('.input_email');
    const input_updateEmailNew = document.querySelector('.input_email_new');
    const text_emailUpdate = document.querySelector('.emailUpdate');
    const text_emailUpdateRender = document.createElement('p');
    text_emailUpdateRender.classList.add('email_green');
    if(input_updateEmailNew.value === input_updateEmail.value){updateEmail(auth.currentUser, input_updateEmail.value ).then(() => {
      text_emailUpdate.innerHTML = "";
      text_emailUpdateRender.textContent = `Correo actualizado a ${input_updateEmail.value}`;
      text_emailUpdate.appendChild(text_emailUpdateRender);
      // Email updated!
      // ...
      setEmail(input_updateEmail.value);
    }).catch((error) => {
      // An error occurred
      // ...
    });
    }else{
      text_emailUpdate.innerHTML = "";
      text_emailUpdateRender.classList.add('email_red');
      text_emailUpdateRender.textContent = "No coinciden los email";
      text_emailUpdate.appendChild(text_emailUpdateRender);
    }
  }

  const userDelete = (e) => {
    e.preventDefault();
    const user = auth.currentUser;
if(window.confirm("¿Estás seguro de que quieres borrar la cuenta?")){
  deleteUser(user).then(() => {
    // User deleted.
    cookies.remove("token");
    setUser(false);

  }).catch((error) => {
    // An error ocurred
    // ...
  });
}
  }

  const resetPassword = (e) => {
    e.preventDefault();
    let sendEmail = document.querySelector('.send_email');
    const email_text = document.createElement('p');
    email_text.classList.add('email_green');
    email_text.textContent = "Email para cambiar contraseña enviado";
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      sendEmail.appendChild(email_text);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
      // ..
    });
  }

  const closeSesion = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    cookies.remove("token");
    setUser(false)
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
    {handleChangeEmail, handleChangePassword, SignUser, show, handleClose, handleShow, email, password, cookies, user, closeSesion, resetPassword, emailUpdate, userDelete, GoogleAuth}
  )
}

export default useSignSesion