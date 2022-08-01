const express=require('express')
const PORT=3000
const app=express()
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const RouteClubs=require('./router/club');
mongoose.connect('mongodb+srv://admin:sportify123@cluster0.colyojz.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
       console.log('Connexion Success');
}).catch((error)=> {
    console.log(error);
});
app.use(bodyParser.json());
app.use('/clubs',RouteClubs)
 
app.listen(PORT,()=>{
    console.log('Serveur demarré  PORT',PORT)
})
module.exports=app;