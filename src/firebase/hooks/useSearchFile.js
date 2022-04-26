import { db } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


export const useSearchFile = () => {

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
            const fileName = e.target.value;
            const q = query(collection(db, "galery"));
            const unsubscribe = await getDocs(q);
            const searchID = await unsubscribe.docs.find(el => el.id === fileName);
            const search_img = document.querySelector('.search_img');
            const imgSearch = document.createElement('img');
            imgSearch.setAttribute('src', searchID.data().url);
            search_img.innerHTML= "";
            search_img.appendChild(imgSearch);
            const dataID = searchID.data();
          }

         
          const selectID = async () =>{
            const q = query(collection(db, "galery"));
            const unsubscribe = await getDocs(q);
            const selectID = document.querySelector('.select_search');
            selectID.innerHTML = "";
            unsubscribe.forEach((doc) => {
              const fireID = doc._key.path.segments[6];
              const fireData = doc._document.data.value.mapValue.fields.url.stringValue;
              const optionID = document.createElement('option');
              optionID.setAttribute('value', fireID );
              optionID.setAttribute('onClick', 'selectIdData');
              optionID.classList.add('optionID');
              optionID.textContent = fireID;
              selectID.appendChild(optionID);
            })
          }  

          const selectIdData = async (e) => {
            const select = e.target.value;
            const q = query(collection(db, "galery"));
            const unsubscribe = await getDocs(q);
            const searchID = await unsubscribe.docs.find(el => el.id === select);
            const search_img = document.querySelector('.search_img');
            const imgSearch = document.createElement('img');
            imgSearch.setAttribute('src', searchID.data().url);
            search_img.innerHTML= "";
            search_img.appendChild(imgSearch);
            const dataID = searchID.data();
          }

    return {
      refreshGalery, searchDATA, selectID, selectIdData, useSearchFile
    }


}

