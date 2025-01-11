const express = require('express');
const connectToDb = require('./database/dB')

const app = express();
const authRoutes = require('./routes/authroutes'); 
const { json } = require('body-parser');

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));


app.use(authRoutes);

connectToDb()
app.listen(3000,()=>{
  console.log('Connected to Server 3000')
})
