import "./App.css";
import {Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path="/product" element={<Product/>}/>

     </Routes>
    </div>
  );
}

export default App;
