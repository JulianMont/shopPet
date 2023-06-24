
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, collection, getDocs, doc , getDoc, query, where, addDoc,writeBatch } from "firebase/firestore" 
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

export const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)

// ------------

export async function getData() {
  
  const productosCollectionRef = collection(db, "productos")
  const productosSnapshot = await getDocs(productosCollectionRef)
  const arrayDocs = productosSnapshot.docs
  const dataDocs = arrayDocs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })
  
  return dataDocs
}

// ------------

export async function getItemData(idUrl) {

  const docRef = doc(db, "productos", idUrl)
  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.data()) {
    return { id: docSnapshot.id ,...docSnapshot.data()}
  } else {
    throw new Error(`No existe el producto ${idUrl}`)
  }

}

// ------------

export async function getCategoryData(idCategory) {


  // arreglo la minuscula que genera useParams 
  const idCategoryFixed = idCategory.charAt(0).toUpperCase() + idCategory.slice(1)


  const productosCollectionRef = collection(db, "productos")
  
  const q = query(productosCollectionRef, where("categoria", "==", idCategoryFixed))

  const productosSnapshot = await getDocs(q)

  const arrayDocs = productosSnapshot.docs


  if (arrayDocs.length) {

    const dataDocs = arrayDocs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })
    return dataDocs
  } else {
    throw new Error(`No existe la categoria ${idCategoryFixed}`)
  }

}

// ------------

export async function createOrder(data) {

  const orderCollectionRef = collection(db, "order")

  const batch = writeBatch(db)

  const { items } = data

  for (let itemInCart of items) {

    const refDoc = doc(db,"productos",itemInCart.id)
    const docSnap = await getDoc(refDoc)
    const { stock } = docSnap.data()

    const stockToUpdate = stock - itemInCart.cantidad
    
    if (stockToUpdate < 0) {
      throw new Error(`Stock insuficiente del producto ${itemInCart.nombre}`)
    } else {
      const docRef = doc(db, "productos", itemInCart.id)
      batch.update(docRef, { stock: stockToUpdate })
    }
  }

  await batch.commit()
  const response = await addDoc(orderCollectionRef, data)
  

  return response.id
}