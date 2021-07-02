const express = require('express'),
    router = express.Router(),
    {Product, validate} = require('../models/product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
})

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    product ? res.send(product) : res.status(404).send(`The product with id ${req.params.id} does not exist`);
})

router.post('/', async (req, res) => {
    // validate
    // const {error} = validate(req.body);
    // if(error) return res.status(404).send(error.details[0].message);

    //check if product exists

    // create product
    let newProduct = new Product({
        name: req.body.name,
        categoryId: req.body.categoryId,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        quantity: req.body.quantity
    });

    // save and return
    const saved = await newProduct.save();
    res.send(saved);
})

router.put('/', async (req, res) => {
    res.send({message: 'To DO'});
})

router.delete('/', async (req, res) => {
    res.send({message: 'To DO'});
})

module.exports = router;
