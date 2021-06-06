const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const addressdetails=new Schema({
    Country:{
        type:String,
        required:true
    },
    Fullname:{
        type:String,
        required:true
    },

    Mobilenumber:{
        type:String,
        required:true
    },

    Pincode:{
        type:String,
        required:true
    },

    Address:{
        type:String,
        required:true
    },

    Landmark:{
        type:String,
        required:true
    },

    City:{
        type:String,
        required:true
    },

    State:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('address', addressdetails)