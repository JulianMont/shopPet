import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] })

export function CartContextProvider({ children }) {
  
  const [cart, setCart] = useState([])
  

  function addItem(item, cantidad) { 
    
    const newCart = [...cart]

    const posItemInCart = isInCart(item.id)

    if (posItemInCart !== -1) {
      
      newCart[posItemInCart].cantidad += cantidad
      setCart(newCart)

    } else {

      newCart.push({ ...item, cantidad }) 
      setCart(newCart)

    }
  }

  function isInCart(id) {
    const itemInCart = cart.findIndex(item => item.id === id)
    return itemInCart
  }

  function removeItem(idItem) {

    const newCart = [...cart]

    let itemPos   = isInCart(idItem)
    
    if (cart[itemPos].cantidad === 1) {

      newCart.splice(itemPos, 1)
      setCart(newCart)
      
    } else {
      
      newCart[itemPos].cantidad--
      setCart(newCart)
    }
  }

  function clearCarrito() { 
    setCart([])
  }
  
  function totalItemsInCart() {
    const totalProductos = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0)
    
    return totalProductos
  }

  function precioTotalCarrito() { 

    const precioTotal = cart.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0)

    return precioTotal

  }
    

  return (
    <cartContext.Provider value={{cart,setCart,addItem,totalItemsInCart,removeItem,precioTotalCarrito,clearCarrito}}>
      {children}
    </cartContext.Provider>
  )
} 
