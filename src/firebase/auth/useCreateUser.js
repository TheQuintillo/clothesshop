
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebaseConfig";
function useCreateUser() {

    const crearUsuario = async (e) => {
        e.preventDefault();
        let email = document.querySelector('.email').value;
        let password = document.querySelector('.password').value;
       await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(createUserWithEmailAndPassword);

          console.log(userCredential.user.getIdToken());
          sendEmailVerification(user, {
            url: "http://localhost:3000",
          }); 

          console.log(user);
          console.log(sendEmailVerification);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    
}

  return (
      {crearUsuario}
  )
}

export default useCreateUser

