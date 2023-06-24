
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormLogin from "./components/FormLogin/FormLogin"
import FormRegister from "./components/FormRegister/FormRegister"
import { CartContextProvider } from "./context/cartContext"
import { UserContextProvider } from "./context/userContext"
import CartView from "./components/CartView/CartView"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm"

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
                        <Route path="/order-sucess/:orderid" element={<OrderConfirm />} />
                        <Route path="*" element={<h1>Error 404</h1>} />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
      </CartContextProvider>
        
    )
}

export default App
