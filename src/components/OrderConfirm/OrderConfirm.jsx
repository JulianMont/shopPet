import { useParams } from "react-router"


function OrderConfirm() {

  const { orderid } = useParams() 
  
  return (
    <div className="container">
      <div className="row">
        <h2>Gracias por tu compra </h2>
        <p>Comprobante: {orderid}</p>
      </div>
    </div>
    
  )
}

export default OrderConfirm