const orders=require('../modals/order')
var nodemailer = require('nodemailer');
exports.getorderdetails=(req,res)=>{
    const request=req.body;
    const order=request.order;
    const email=request.email;
    const orderid=request.orderid;
    const orderimage=request.orderimage;
    const ordercost=request.ordercost;

    

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sarathbunny75',
    pass: 'Sarath@9550'
  }
});

var mailOptions = {
  from: 'sarathbunny75@gmail.com',
  to: email,
  subject: 'Thankyou for your order!',
  html: `<h4 style={color:'deepskyblue'}>Your order is ${order}</h4>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    const Orderdetails= new orders({ordername:order,orderid:orderid,orderimage:orderimage,ordercost:ordercost})

    Orderdetails.save()

    .then(response=>res.status(200).json({message:'order details stored successfully', order:response}))

    .catch(error=>res.status(500).json({err:error}))

}

exports.getmyorderdetails=(req,res)=>{

const requests=req.body;
const orderid=requests.orderid;

  orders.find({orderid:orderid})

       .then(response=>res.status(200).json({message:'orders fetched successfully', order:response}))


       .catch(err=>res.status(500).json({error:err}))
}