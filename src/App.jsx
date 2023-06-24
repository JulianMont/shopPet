
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormLogin from "./components/FormLogin/FormLogin"
import FormRegister from "./components/FormRegister/FormRegister"
import { CartContextProvider } from "./context/cartContext"
import { UserContextProvider } from "./context/userContext"
import CartView from "./components/CartView/CartView"

function App() {

    return (
      
        <CartContextProvider>
            <UserContextProvider>
            <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        <Route path="/categoria/:categoryid" element={<ItemListContainer />} />
                        <Route path="/login" element={<FormLogin />}/>
                        <Route path="/register" element={<FormRegister />}/>
                        <Route path="/cart" element={<CartView />} />
                        <Route path="/order-sucess/:orderid" element={<></>} />
                        <Route path="*" element={<h1>Error 404</h1>} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
      </CartContextProvider>
      

        
        // Generar un context error para manejar los errores por si no encuentra/existe el producto -> ultimo Afterclass 1.08.28


        // Agregar un alert(toastify/sweetAlert) mostrando el id de la compra generada
        // Redireccion al realizar la compra, useNavigate de React Router
        // checkear que no este vacio con el try catch

        // useParams para recuperar la id del :orderid del order sucess



        
    )
}

export default App
