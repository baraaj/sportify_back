'use strict'
const express=require('express')
const PORT=6300
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://baraa:admin@cluster0.cxqyjam.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{

}

)
app.get('/',(req,res)=>{

    res.send('Hello World')
})
app.listen(PORT,()=>{
    console.log('Serveur demarré  PORT',PORT)
})