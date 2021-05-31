const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const product = new Schema({
    name: String,
    categoryId: String,
    imageUrl: String,
    price: String,
    quantity: Number
});

module.exports.validate = function validateProduct(product){return {message: 'To DO'}}

module.exports.Product = mongoose.model('Product', product);
