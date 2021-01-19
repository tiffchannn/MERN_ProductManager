const {Product} = require('../models/product.model');

module.exports.index = (req, res) => {
  res.json({
    message: 'Hello world!'
  });
}

module.exports.createProduct = (req, res) => {
  const {title, price, description} = req.body;
  Product.create({
    title: title,
    price: price,
    description: description
  })
    .then(newlyCreatedProduct => res.json(newlyCreatedProduct))
    .catch(err => res.json({Message: 'Uh oh! Unable to create a product!', Error: err}))
}

module.exports.findAllProducts = (req, res) => {
  Product.find({})
  .then(allProducts => res.json(allProducts))
  .catch(err => res.json('Uh oh! Unable to get all products!', err))
}

module.exports.findOne = (req, res) => {
  Product.findOne({_id: req.params.id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json('Uh oh! Unable to get a product!', err))
}

// Update one product at a specific ID
module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

// Delete one product at a specific ID
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({_id: req.params.id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => res.json(err))
}