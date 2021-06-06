const location=require('../modals/locations');

exports.getlocations=(req,res)=>{
    location.find()

    .then(response=>res.status(200).json({message:'locations fetched succssfully', locations:response}))

    .catch(err=>res.status(500).json({error:err}))
}