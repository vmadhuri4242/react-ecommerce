
      
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cards from './Cards';
import data from'./Data';
import Cart from './Cart';
import React,{useState} from 'react';

function App() {
  const[cartData,setCartData]=useState([])
  const handleCartData=(product)=>{
    console.log(product)
    setCartData((cartData)=>[...cartData,{data:product,quantity:1}])

  }

  



  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Carousel/>
     
      <Routes>
        <Route path="/" element={<Cards data={data}handleCartData={handleCartData}/>}/>
        <Route path="/cart"element={<Cart data={cartData}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
  }

export default App;

  
  
