
import productos from "../data/productos"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore,writeBatch,doc, collection } from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTQ7wASg2ZOajPQSK3enRTZRhY-dWIgME",
  authDomain: "proyecto-react-coder-4232f.firebaseapp.com",
  projectId: "proyecto-react-coder-4232f",
  storageBucket: "proyecto-react-coder-4232f.appspot.com",
  messagingSenderId: "1078661899125",
  appId: "1:1078661899125:web:ebba0668c73810ec91293c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export async function exportData() {

  const batch = writeBatch(db)
  const productosCollectionRef = collection(db,"productos")

  for (let item of productos) {

    const newItem = doc(productosCollectionRef)
    // si no hubiera borrado en el array las id , podia usar la prop delete item.id para borrarlos
    batch.set(newItem, item)
  }

  await batch.commit()

  console.log("Docs creados")
} 