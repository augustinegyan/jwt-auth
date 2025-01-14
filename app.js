const express = require('express');
const connectToDb = require('./database/dB')
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/authroutes'); 
const { json } = require('body-parser');
const {requireAuth} = require('./middleware/authmiddleware')
// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies',requireAuth, (req, res) => res.render('smoothies'));


app.use(authRoutes);

connectToDb()
app.listen(3000,()=>{
  console.log('Connected to Server 3000')
})



