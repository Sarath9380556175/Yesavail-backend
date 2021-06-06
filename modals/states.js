const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const getstates=new Schema({
    Countryname:{
        type:String,
        required:true
    },
    Statename:
    {
        type:String,
        required:true
    }
})

module.exports=mongoose.model('state',getstates)