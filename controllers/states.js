const tkr=require('../modals/states')

exports.getstates=(req,res)=>{
    const request=req.body;
    const statename=request.statename;

    tkr.find({Countryname:statename})

    .then(response=>res.status(200).json({message:'state detials filtered successfully', sname:response}))

    .catch(err=>res.status(500).json({error:err}))

}