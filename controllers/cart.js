const cart=require('../modals/cart')

exports.postcartdetails=(req,res)=>{
    const request=req.body;

    const Tshirtimage=request.Tshirtimage;
    const Tshirtname=request.Tshirtname;
    const Tshirtcost=request.Tshirtcost;
    const OrderId=request.OrderId;
    const Ordernow=request.Ordernow;

    const mycart=new cart({Tshirtimage:Tshirtimage,Tshirtname:Tshirtname,Tshirtcost:Tshirtcost,OrderId:OrderId,Ordernow:Ordernow})

    mycart.save()

    .then(response=>res.status(200).json({message:'cart details stored successfully',cart:response}))

    .catch(err=>res.status(500).json({error:err}))

}

exports.getcartdetails=(req,res)=>{

    const request=req.body;
    const OrderId=request.OrderId;
    cart.find({OrderId:OrderId})

    .then(response=>res.status(200).json({message:'cart details fetched successfully', carts:response}))

    .catch(err=>res.status(500).json({error:err}))

}