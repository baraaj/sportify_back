'use strict'
const express=require('express')
const PORT=6300
const app=express()
const mongoose=require('mongoose');
const bodyParser=require('body.parser');
const RouteClubs=require('./router/club');
mongoose.connect('mongodb+srv://baraa:admin@cluster0.cxqyjam.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
       console.log('Connexion Success');
}).catch((error)=> {
    console.log(error);
});
app.use(bodyParser.json());
app.use('/api/clubs/',RouteClubs)
app.get('/',(req,res)=>{

    res.send('Hello World')
})
app.listen(PORT,()=>{
    console.log('Serveur demarré  PORT',PORT)
})
module.exports=app;