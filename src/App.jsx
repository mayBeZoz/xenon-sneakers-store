import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home , Contact , Women , Cart , ProductPage , Register , Men } from "./Pages/Index"
import Header from "./Layout/Header/Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Menu from "./Layout/Menu/Menu"
import { fetchShoes } from "./Stores/ShoesSlice"
import Footer from "./Layout/Footer/Footer"

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchShoes())
    },[])


    return (
        <>
        

            <BrowserRouter>
            
                <Header/>
            
                <Menu/>
  
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/men" element={<Men/>}/>
                    <Route path="/women" element={<Women/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <Route path="/men/:productId" element={<ProductPage/>}/>
                    <Route path="/women/:productId" element={<ProductPage/>}/>

                </Routes>
            
                <Footer/>
            
            </BrowserRouter>
        
        
        </>
    )
}

export default App
