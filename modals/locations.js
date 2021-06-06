const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const locationdetails=new Schema({
    Countryname:{
        type:String,
        required:true
    }
  
})

module.exports=mongoose.model('location',locationdetails)