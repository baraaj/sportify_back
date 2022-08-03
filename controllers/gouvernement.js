const Gouvernement=require('../models/Gouvernement');
const ObjectID=require('mongoose').Types.ObjectId;


exports.ajoutGouv=(req,res,next)=>{
    
    const gv=new Gouvernement(req.body);
       gv.save()
     
    .then((gv)=>{
        return res.status(203).json({gv})
 
 
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
 }