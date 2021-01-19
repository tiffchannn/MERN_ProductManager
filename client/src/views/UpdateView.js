import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const UpdateView = props => {
  const { id } = props;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/product/' + id)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
  }, [])

  const updateProduct = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/product/' + id, {
      title,
      price,
      description
    })
      .then(res => console.log('Product was successfully updated\n' + res))
      .catch(err => console.log(err))
      navigate('http://localhost:3000')
  }

  return(
    <div>
      <h1> Update A Product </h1>
      <form onSubmit={updateProduct}>
      <p>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>

      <p>
        <label>Price: </label>
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>

      <p>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
        <input type="submit" value="Update" className="btn"/>
      </form>
      <p><Link to ="/" className="dashboard-link">
        Dashboard
      </Link></p>
    </div>
  );


};

export default UpdateView;