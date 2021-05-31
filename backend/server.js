const express = require('express'),
    app = express(),
    logger = require('morgan'),
    fileUpload = require('express-fileupload'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000,
    productRouter = require('./routes/product-routes'),
    categoryRouter = require('./routes/category-routes');

// mongoose config
mongoose.connect(
    'mongodb://localhost/e-com',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(()=> console.log('mongoDB successfully connected!'))
    .catch(err => console.log(`failed to connect to mongoDB\nReason is ${err}`));

// middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static('uploads'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));

// routes
app.get('/', (req, res) => {
    res.send('Hello world!');
})
app.use('/products', productRouter);
app.use('/category', categoryRouter);

// listen
app.listen(port, (req, res) => {
    console.log(`app running at port: ${port}`);
})
