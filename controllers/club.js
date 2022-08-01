const Club=require('../models/club');



exports.ajoutClub=(req,res)=>{
   const cl=new Club(req.body);
   cl.save()
   .then((club)=>{
       return res.status(203).json({club})


   })
   .catch((error)=>{
    return res.status(400).json({error})
   })
}