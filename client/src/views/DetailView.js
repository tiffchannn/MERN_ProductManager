import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

// Displays a product's detailed information
const DetailView = (props) => {
  const [product, setProduct] = useState({})

  // allows us to get a specific product by it's ID
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to = {product._id + "/edit"} className="edit-link">
        Edit Product
      </Link>
      <p><Link to ="/" className="dashboard-link">
        Dashboard
      </Link></p>
    </div>
  );
};

export default DetailView;



