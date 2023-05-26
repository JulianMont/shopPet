import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

import productos from "../../data/productos"
function getProductos(){
    return new Promise( resolve =>{
        setTimeout(() => { 
            resolve(productos)
        },500)
    })
}

export default function ItemListContainer() {

    let [productos,setProductos] = useState([])

    useEffect(()=>{   
        getProductos().then( resProductos => setProductos(resProductos))
    },[])

    return(

        <>

            <h2 className="mb-4">Productos</h2>

            <ItemList productos = {productos}/>

        </>

    )
}