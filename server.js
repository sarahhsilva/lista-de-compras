const express = require('express');
const exphbs = require('express-handlebars');
const PORT = 3333;
const conn = require('./db/conn')

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//importar as rotas
const productRouter = require('./routers/productRouters')

//usar as rotas --> http://localhost:3333/product
app.use('/product', productRouter)

app.listen(PORT, ()=>{
    console.log(`servidor on! Port ${PORT}`);
});