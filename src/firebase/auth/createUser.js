import React from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CreateUser() {

    const crearUsuario = async (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
      
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
          // ..
        });
    
}

  return (

      <>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control id="email" type="email" placeholder="Introduce tu Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control id="password" type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={crearUsuario}>
    Registrarse
  </Button>
</Form>
      </>
  )
}

export default CreateUser

