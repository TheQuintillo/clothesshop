import { db } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { storage } from "../firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";


export const useSearchFile = () => {

      let input = document.querySelectorAll('.input_search');
      const refreshGalery =  async () => {
        const q = query(collection(db, "galery"));
          const unsubscribe = await getDocs(q);
          console.log(unsubscribe);
          const divGalery = document.querySelector('.grid_search_section');
          divGalery.innerHTML = "";
          var fragment = document.createDocumentFragment();
          await unsubscribe.forEach((doc)=>{
            if(fragment.childNodes.length < 4){
            const itemGalery = document.createElement('div');
                  const itemGaleryImg = document.createElement('img');
                  const itemGaleryText = document.createElement('p');
                  itemGalery.classList.add('item_galery');
                  itemGaleryImg.setAttribute('src', doc.data().url);
                  itemGaleryText.textContent = `${doc.data().price} €`;
                  itemGalery.appendChild(itemGaleryImg);
                  itemGalery.appendChild(itemGaleryText);
                  fragment.appendChild(itemGalery);
                }else{return}
          });
        
          divGalery.appendChild(fragment);
        }
          // BUSCAR REGISTRO DE DATOS EN DB 
              
            const searchDATA = async (e) =>{
            e.preventDefault();
            input = e.target.value.toLowerCase();
            const q = query(collection(db, "galery"));
            const unsubscribe = await getDocs(q);
            const searchID = await unsubscribe.docs.find(el => el.id === input);
            const search_img = document.querySelector('.search_img');
            const imgSearch = document.createElement('img');
            imgSearch.setAttribute('src', searchID.data().url);
            search_img.innerHTML= "";
            search_img.appendChild(imgSearch);
          }

         
          const selectID = async () =>{
            const q = query(collection(db, "galery"));
            const unsubscribe = await getDocs(q);
            const selectID = document.querySelector('.select_search');
            selectID.innerHTML = "";
            unsubscribe.forEach((doc) => {
              const fireID = doc._key.path.segments[6];
              const optionID = document.createElement('option');
              optionID.setAttribute('value', fireID );
              optionID.setAttribute('onClick', 'selectIdData');
              optionID.classList.add('optionID');
              optionID.textContent = fireID;
              selectID.appendChild(optionID);
            })
          }  

          const selectIdData = async (e) => {
            input = e.target.value.toLowerCase();
            const q = query(collection(db, "galery"));
            const unsubscribe = await getDocs(q);
            const searchID = await unsubscribe.docs.find(el => el.id === input);
            const search_img = document.querySelector('.search_img');
            const imgSearch = document.createElement('img');
            imgSearch.setAttribute('src', searchID.data().url);
            search_img.innerHTML= "";
            search_img.appendChild(imgSearch);
            
          }

          const deleteFile = async (e) => {
            // Create a reference to the file to delete STORAGE
              const path = 'clothes_shop/web_images/';
              const search_img = document.querySelector('.search_img');
              const desertRef = ref(storage, `${path}${input}`);
              // Delete the file
              deleteObject(desertRef).then(() => {
                // File deleted successfully
              }).catch((error) => {
                // Uh-oh, an error occurred!
              });
               // FIRESTORE
               await deleteDoc(doc(db, 'galery', input));
               selectID();
               refreshGalery();
               search_img.innerHTML = "";
            }

    return {
      refreshGalery, searchDATA, selectID, selectIdData, useSearchFile, deleteFile
    }


}

