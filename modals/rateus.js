const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const rateusdetails=new Schema({
    quality:{
        type:String,
        required:true
    },
        food:{
            type:String,
            required:true
        },
        feedback:
        {
            type:String,
            required:true
        }
    
})

module.exports=mongoose.model('rating', rateusdetails)