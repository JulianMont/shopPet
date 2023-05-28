import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

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

    const {categoria} = useParams()

    useEffect(()=>{   
        getProductos().then( resProductos => {

            const filterProducts = categoria ? resProductos.filter(item => item.categoria === categoria) : resProductos
            setProductos(filterProducts)

        })
    },[categoria])

    return(

        <>
            <h2 className="mb-4">Productos</h2>

            <ItemList productos = {productos}/>

        </>

    )
}