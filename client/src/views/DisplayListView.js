import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayListView = (props) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    // console.log("Hello from Display List View")
    axios.get(`http://localhost:8000/api/product/${props.id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default DisplayListView;