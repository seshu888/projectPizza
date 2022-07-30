import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Footer from './components/Footer';
import Feature from './components/Feature';
// import { productData, productDataTwo } from './components/Products/data';

function App() {
  const [cartItems,setCartItems]=useState([])

  let total=0
  const handleAddToCart=(item)=>{
    let items=[...cartItems]
    items.push(item)
    setCartItems(items)

    items.forEach((item)=>{
      total=total+item.price
    })
  
  }
  return (
    <BrowserRouter>

        <Banner cartItems={cartItems && cartItems} total={total}/>
        <Products heading='Choose your favorite' data={productData} handleAddToCart={handleAddToCart} />
        <Feature/>
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
