const address=require('../modals/address');

exports.getaddressdetails=(req,res)=>{
    const request=req.body;

    const Country=request.Country;
    const Fullname=request.Fullname;
    const Mobilenumber=request.Mobilenumber;
    const Pincode=request.Pincode;
    const Address=request.Address;
    const Landmark=request.Landmark;
    const City=request.City;
    const State=request.State;
    console.log(State)

    const addressdetails=new address({Country:Country,Fullname:Fullname,Mobilenumber:Mobilenumber,Pincode:Pincode,Address:Address,
    Landmark:Landmark,City:City,State:State})

    addressdetails.save()

    .then(response=>res.status(200).json({message:'address details stored successfully',address:response}))

    .catch(error=>res.status(500).json({err:error}))

}