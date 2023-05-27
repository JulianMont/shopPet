
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import  {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {



    return (

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/producto/:id" element={<ItemDetailContainer/>} />
                <Route path="/:categoria" element={<ItemListContainer/>} />
                <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
