const express = require('express'),
    router = express.Router(),
    {Category, validate} = require('../models/category');

router.get('/', async (req, res) => {
    const category = await Category.find();
    res.send(category);
})

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    category ? res.send(category) : res.status(404).send(`The category with id ${req.params.id} does not exist`);
})

router.post('/', async (req, res) => {
    // validate
    // const {error} = validate(req.body);
    // if(error) return res.status(404).send(error.details[0].message);

    //check if category exists

    // create category
    let newCategory = new Category({
        name: req.body.categoryName
    });

    // save and return
    const saved = await newCategory.save();
    res.send(saved);
})

router.put('/', async (req, res) => {
    res.send({message: 'To DO'});
})

router.delete('/', async (req, res) => {
    res.send({message: 'To DO'});
})

module.exports = router;
