import Button from '../Button/Button'

import { useState } from 'react'

// Agregar alerta+disabled cuando llega a la max cantidad o a la menor cantidad


export default function ItemCount({stock}) {

    const [cantidad,setCantidad] = useState(1)

    function handleSumaCantidad(){
        if(cantidad<stock) setCantidad(cantidad+1)
    }

    function handleRestaCantidad(){
        if(cantidad>1) setCantidad(cantidad-1)
    }

    let desabilitarBotonResta = (cantidad === 1)
    let desabilitarBotonSuma = (cantidad === stock)

    return (
    
        <div className='container d-flex flex-column align-items-center'> 
            <div className='d-flex align-items-baseline gap-4'> 
                <Button disabled={desabilitarBotonResta} className={"btn btn-danger"} onClick={handleRestaCantidad}>-</Button>
                <p className='fw-bold'>{cantidad}</p>
                <Button disabled={desabilitarBotonSuma} className={"btn btn-success"} onClick={handleSumaCantidad}>+</Button>
            </div>
            <Button className={"btn btn-primary"}>Agregar al carrito</Button>
        </div>
    )




}