const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const postcartdetails=new Schema({

    OrderId:{
        type:String,
        required:true
    },
    Tshirtimage:{
        type:String,
        required:true
    },
    Tshirtname:{
        type:String,
        required:true
    },
    Tshirtcost:{
        type:String,
        required:true
    },
    Ordernow:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('cart',postcartdetails)