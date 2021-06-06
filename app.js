const express=require('express')
const mongoose=require('mongoose')

const cors=require('cors')
const routes=require('./routers/index')
const app=express();

const port=process.env.PORT||2021;
const host='localhost';

app.use(cors())

app.use(express.json())

app.use('/',routes)

mongoose.connect('mongodb+srv://BujalaSarathKumarReddy:12345abcd@cluster0.nud0w.mongodb.net/Foodordering?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true}, ()=>{

    app.listen(port,host,()=>{
        console.log(`Server is running on ${host} : ${port}`)
    })

})

