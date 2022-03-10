import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Footer from './components/Footer';
import Feature from './components/Feature';
// import { productData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <BrowserRouter>
        
        <Banner/>
        <Products heading='Choose your favorite' data={productData} />
        <Feature/>
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
