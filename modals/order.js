const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const orderdetails=new Schema({
    ordername:{
        type:String,
        required:true
    },
    orderid:{
        type:String,
        required:true
    },
    orderimage:{
        type:String,
        required:true
    },
    ordercost:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('order',orderdetails)