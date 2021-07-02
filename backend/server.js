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

app.post('/products', (req, res, next) => {
    req.body = JSON.parse(req.body.data);

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let file = req.files['file'];
    let uploadPath = __dirname + '\\uploads\\' + file.md5 + file.name;
    req.body.imageUrl = file.md5 + file.name;

    file.mv(uploadPath, function(err) {
        if (err){
            return res.status(500).send(err);
        }
    });

    next();
});

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
