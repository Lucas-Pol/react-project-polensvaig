import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProdList from "./prodList"


const Routing = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path="/ProdList" element={<ProdList/>} />                
            

        </Routes>

    </BrowserRouter>

  )
}

export default Routing