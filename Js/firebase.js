// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDmiVGxt1124PpIa-a0tMINsrmgs9iZRG4",
    authDomain: "e-commerce-684c6.firebaseapp.com",
    projectId: "e-commerce-684c6",
    storageBucket: "e-commerce-684c6.appspot.com",
    messagingSenderId: "894544627478",
    appId: "1:894544627478:web:a471840eaad07dbfd0b237"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);


  // leer objetos de la db

export const getProducts = async () => {

const querySnapshot = await getDocs(collection(db, "productos"));

const products = []

querySnapshot.forEach((doc) => {

  products.push({id:doc.id,data:doc.data()});

});

return products;

}

export const getAdidas = async () => {

  const querySnapshot = await getDocs(collection(db, "Adidas"));
  
  const products = []
  
  querySnapshot.forEach((doc) => {
  
    products.push({id:doc.id,data:doc.data()});
  
  });
  
  return products;
  
  }

  export const getHead = async () => {

    const querySnapshot = await getDocs(collection(db, "Head"));
    
    const products = []
    
    querySnapshot.forEach((doc) => {
    
      products.push({id:doc.id,data:doc.data()});
    
    });
    
    return products;
    
    }

    export const getVarlion = async () => {

      const querySnapshot = await getDocs(collection(db, "Varlion"));
      
      const products = []
      
      querySnapshot.forEach((doc) => {
      
        products.push({id:doc.id,data:doc.data()});
      
      });
      
      return products;
      
      }

      export const getUrich = async () => {

        const querySnapshot = await getDocs(collection(db, "Urich"));
        
        const products = []
        
        querySnapshot.forEach((doc) => {
        
          products.push({id:doc.id,data:doc.data()});
        
        });
        
        return products;
        
        }

 
