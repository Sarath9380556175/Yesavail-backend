
const signup=require('../modals/signup')
var nodemailer = require('nodemailer');

    exports.getsignupdetails=(req,res)=>{
  const request=req.body;

  const name=request.name;

  const email=request.email;

  const password=request.password;

  const gender=request.gender;

  console.log(password)
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
    subject: 'Successfully created account in our application!',
    text:
    `    Welcome ${name} 
    
    order your favourite food now
    
    from:
    Sarath restaurants
    `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  
  const mysignups=new signup({name:name,email:email,password:password,gender:gender})

  mysignups.save()

  .then(response=>res.status(200).json({message:'details stored successfully', signup:response}))


  .catch(error=>res.status(500).json({err:error}))
     
    }


    exports.getlogindetails=(req,res)=>{
        const skr=req.body;
        const mail=skr.email;
        const pwd=skr.password;
        const gender=skr.gender;
console.log(gender)

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sarathbunny75',
    pass: 'Sarath@9550'
  }
});

var mailOptions = {
  from: 'sarathbunny75@gmail.com',
  to: mail,
  subject: 'Successfully Loggedin to our application!',
  html:`<h4 style="color:blue">User successfully Loggedin to our application</h4>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

        signup.find({email:mail,password:pwd,gender:gender})

        .then(response=>{
          
         if(response.length!=0)
         {
          res.status(200).json({message:'details fetched successfully', login:response,isloggedin:true})
         }   
         else{
          res.status(200).json({message:'details fetched successfully', login:response,isloggedin:false})
         }       
         })

        .catch(error=>res.status(500).json({err:error}))

    }

    exports.postsignupdetails=(req,res)=>{

      signup.find()

      .then(response=>res.status(200).json({message:'signup details fetched successfully', getsignup:response}))


      .catch(err=>res.status(500).json({error:err}))

    }