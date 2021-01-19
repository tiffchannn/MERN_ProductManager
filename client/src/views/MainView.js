import React, {useEffect, useState} from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// Dashboard - shows our form and all products in database
const MainView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch(err => console.log('Error: ', err))
  }, [])

  const removeFromDOM = (productID) => {
    setProducts(products.filter(product => product._id !== productID))
  }

  return(
    <div>
      <h1> Product Manager</h1>
      <ProductForm products={products} setProducts={setProducts}/>

      <div className="all-products">
        <h2>All Products:</h2>
        <ProductList products={products}  removeFromDOM={removeFromDOM} />
      </div>
    </div>
  );
};

export default MainView;