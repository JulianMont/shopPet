
import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useParams } from "react-router-dom"

import productos from "../../data/productos"
function getItemData(id){
    return new Promise( resolve =>{
        setTimeout(() => { 
            const itemABuscar = productos.find(item => item.id === parseInt(id))
            resolve(itemABuscar)
        },500)
    })
}

export default function ItemDetailContainer() {

    const [producto,setProducto] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        getItemData(id).then( resProducto => setProducto(resProducto))
    },[id])

    const {nombre,descripcion,precio,imagen,stock} = producto

    return (

        <div className="container mt-5">
            <div className="card text-center">
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt={nombre}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{nombre}</h1>
                            <p className="card-text">{descripcion}</p>
                            <ItemCount stock = {stock} precio = {precio}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
