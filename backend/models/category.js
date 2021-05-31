const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const category = new Schema({
    name: String
});

module.exports.validate = function validateProduct(category){return {message: 'To DO'}}

module.exports.Category = mongoose.model('Category', category);
