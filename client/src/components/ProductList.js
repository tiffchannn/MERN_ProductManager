import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

// Displays our list of products from our database
const ProductList = (props) => {
  const {removeFromDOM} = props;

  const deleteProduct = (productID) => {
    axios.delete('http://localhost:8000/api/product/' + productID)
      .then(res => {
        removeFromDOM(productID);
      })
  }

  return(
    <div>
      {props.products.map((product, idx) => {
        return <p key={idx}>
          <Link to={product._id + "/edit"} className="product-list-item">
            {product.title}
          </Link>
          <button className="delete-btn" onClick={ (e) => {deleteProduct(product._id)} }>
            Delete
          </button>
        </p>
      })}
    </div>
  );
};

export default ProductList;

