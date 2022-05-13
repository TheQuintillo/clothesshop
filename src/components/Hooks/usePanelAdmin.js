import { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import { auth } from '../../firebase/firebaseConfig';

function usePanelAdmin() {
    const [admin, setAdmin] = useState(false);

  const adminPanel = async () => {
    const user = auth.currentUser;
    console.log(user);
    const q = query(collection(db, "user"));
              const unsubscribe = await getDocs(q);
              const adminUser = unsubscribe.docs.find((doc) => user.uid === doc._key.path.segments[6]);
                const rol = adminUser._document.data.value.mapValue.fields.rol.stringValue;
                console.log(adminUser);
                if(rol === "admin"){
                  setAdmin(true);
                }
  }
  return (
    {admin, adminPanel}
  )
}

export default usePanelAdmin