const mongoose=require('mongoose')

const Schema=mongoose.Schema;


const getsignupdetails=new Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('signupdetail', getsignupdetails)