const User = require('../model/User')

//handle errors 
const handleErrors = (err) =>{
    console.log(error.message, error.code);
    let err = {email:'',password:''};

    //validation error 
    if(error.message.includes('Student validation failed')){
       console.log(Object.values(error.erorrs));
       
    }
}



//sign up get
const signup_get = (req,res)=>{
    res.render('signup')
}


//Login up get
const login_get = (req,res)=>{
    res.render('login')
}


//Sign Up Post
const signup_post = async (req,res)=>{
    const {email, password} = req.body
    try {
       const user = await User.create({email,password})
       res.status(201).json(user)
        
    } catch (error) {
        handleErrors(error)
        res.status(400).send('Could not create user account ')
    }
}



//Login Post 
const login_post = async (req,res)=>{
    res.render('user login')
}

module.exports={
    login_get,
    login_post,
    signup_get,
    signup_post
}