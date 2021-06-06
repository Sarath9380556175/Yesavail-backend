const Rating =require('../modals/rateus')

exports.getrateusdetails=(req,res)=>{
    const request=req.body;

    const quality=request.quality;

    const food=request.food;

    const feedback=request.feedback;

    const ratingdetails=new Rating({quality:quality,food:food,feedback:feedback})

    ratingdetails.save()

    .then(response=>res.status(200).json({message:'user ratings stored successfully',rating:response}))

    .catch(err=>res.status(500).json({error:err}))

}