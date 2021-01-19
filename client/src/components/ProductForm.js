import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = ({products, setProducts}) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      description
    })
      .then(res => {
        // console.log('Response: ', res.data)

        // Use spread to include our other products as well as our newly created product
        // Remember: spread is just like slice!
        setProducts([...products, res.data])
      })
      .catch(err => console.log('Error: ', err))
  }

  return(
    <form onSubmit={handleSubmit}>
      <p>
        <label>Title: </label>
        <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
      </p>
      <p>
        <label>Price: </label>
        <input type="text" name="price" onChange={(e) => setPrice(e.target.value)}/>
      </p>
      <p>
        <label>Description: </label>
        <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
      </p>
      <input className="btn" type="submit" value="Create Product"/>
    </form>

  );
};

export default ProductForm;