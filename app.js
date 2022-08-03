const express=require('express')
const PORT=3000
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const RouteClubs=require('./router/club');
const userRoutes=require('./router/user');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
mongoose.connect('mongodb+srv://admin:sportify123@cluster0.colyojz.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
       console.log('Connexion Success');
}).catch((error)=> {
    console.log(error);
});
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/clubs',RouteClubs);
app.use('/api/auth',userRoutes);
app.use(cors({origin:'http://localhost:3000'}));
/*app.listen(PORT,()=>{
    console.log('Serveur demarré  PORT',PORT)
})*/
//server.listen(process.env.PORT||3000);
module.exports=app;