import { useState } from "react";
import { storage } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSearchFile } from "./useSearchFile";

export const useAddFile = () => {
  const [nameFile, setNameFile] = useState("");
  const [storageRuth, setStorageRuth] = useState("");
  const [file, setFile] = useState(null);

  const { refreshGalery, selectID } = useSearchFile();

    const archivoHandler = (e)=> {
      const path = 'clothes_shop/web_images/';
      const fileInput = e.target.files[0];
      setFile(fileInput);
      const storageRef = ref(storage, `${path}${nameFile}`);
      setStorageRuth(storageRef);
      console.log(storageRef);

    }

    const uploadHandler = async (e) =>{
      e.preventDefault();
    if(nameFile){
      await uploadBytes(storageRuth, file).then((snapshot) => {
      });
      
      await getDownloadURL(storageRuth).then(async (snapshot2) => {
        if(snapshot2){
          addFile(snapshot2)
        }
      });
    }else{alert("Introduce el nombre de la imagen")}
      console.log(storageRuth);
    }

    const nameHandler = (e)=> {
      const name= e.target.value.toLowerCase();
      setNameFile(name);
      const path = 'clothes_shop/web_images/';
      const storageRef = ref(storage, `${path}${name}`);
      setStorageRuth(storageRef);
      console.log(storageRef);
    } 

    const addFile = async (url) => {
      try { 
        const input_price=document.querySelector('.input_price');
        //AGREGAR ARCHIVO CON ID Y CAMPOS A LA COLECCION 
        await setDoc(doc(db, "galery", nameFile), {
            name: nameFile,
            url: url,
            price: input_price.value
          });
    
          // LEER  TODOS LOS ARCHIVOS DE COLECCION 1mera forma
          refreshGalery();
          selectID();
          
        }catch (e) {
            console.error("Error adding document: ", e);
        }
      }

    return {
      archivoHandler, uploadHandler, nameHandler, addFile
    }
  
}
