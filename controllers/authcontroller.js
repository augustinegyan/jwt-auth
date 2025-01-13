const User = require('../model/User')
const jwt = require('jsonwebtoken')



const maxAge = 3*24*60*60;
const createToken = (id)=>{
    return jwt.sign({id},'secretKey',{
        expiresIn: maxAge
    })
}
//handle errors 
const handleErrors = (err) =>{
    console.log(err.message, err.code);
    let errors = {email:'',password:''};

    
    //validation error 
    if(err.message.includes('Student validation failed')){
       Object.values(err.errors).forEach(({properties}) => {
         errors[properties.path]=properties.message;

       })
       
    }
    
    //duplicate error code 
    if(err.code ===11000){
        errors.email = 'that email is already registered'
        return errors;
    }

    return errors;
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
       const token = createToken(user._id);
       res.cookie('jwt',token,{httpOnly: true, maxAge:maxAge*1000})
       res.status(201).json(user)
        
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({errors})
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