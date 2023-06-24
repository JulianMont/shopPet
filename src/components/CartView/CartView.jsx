
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import Button  from "../Button/Button"
import { createOrder } from "../../services/firebase"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { userContext } from "../../context/userContext"



export default function CartView() {

  const { cart, removeItem, precioTotalCarrito, clearCarrito, totalItemsInCart} = useContext(cartContext)

  const { user } = useContext(userContext)

  const navigateTo = useNavigate()
  
  async function handleConfirm() {
    
    const order = {

      items: cart,
      buyer: user.email,
      date: new Date(),
      price:  precioTotalCarrito(),
    }

    try {
      const id = await createOrder(order)

      clearCarrito()
      navigateTo(`/order-sucess/${id}`)

    }catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  } 

  function handleRemoveItem(id) {
    removeItem(id)
    toast.success('Producto eliminado del carrito', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		})
  }

  function handleCleanCart() {
    clearCarrito()
    toast.info('Se ha limpiado el carrito', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		})
  }

  if (Object.keys(user).length === 0) {
    return (
      <div className="container">
        <h2>Inicie sesion para ver su carrito</h2>
      </div>
    )
  }

  if ( Object.keys(user).length !== 0 && totalItemsInCart() === 0) {
    return (
      <div className="container">
        <h2>Tu carrito de compra se encuentra vacio</h2>
      </div>
    )
  }


  return (

    <div className="container">
      <ToastContainer />
      <div className="row">
        <h2>Carrito de compras</h2>

        <table className="table table-hover table-striped table-borderless align-middle text-center fw-bold">
          <thead className="table-dark">
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Precio Unitario</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map( item => (
                
                <tr key={item.id}>
                  <td><img src={item.imagen} alt={item.descripcion} /></td>
                    <td>{item.nombre}</td>
                    <td className="text-nowrap"> $ {item.precio}</td>
                    <td>{item.cantidad}</td>
                    <td className="text-nowrap"> $ {(item.precio * item.cantidad).toFixed(2) } </td>
                  <td><Button onClick={()=>handleRemoveItem(item.id)} className={'btn btn-danger'}><FontAwesomeIcon icon={faCartShopping} /></Button></td>
                </tr>

              ))
            }
          </tbody>
          <tfoot className="table-dark">
            <tr>
              <td colSpan={6} className="text-end pe-5">
                Total Carrito: $ {precioTotalCarrito()}
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="d-flex justify-content-end gap-4">
          <Button onClick={handleCleanCart} className={'btn btn-secondary fw-bold'}>Limpiar Carrito</Button>
          <Button onClick={handleConfirm} className={'btn btn-success me-5 fw-bold'}>Realizar Compra</Button>
        </div>
      </div>
    </div>
  )
}

