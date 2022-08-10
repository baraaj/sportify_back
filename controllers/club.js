const { default: mongoose } = require('mongoose');
const Club=require('../models/Club');
const ObjectID=require('mongoose').Types.ObjectId;



exports.ajoutClub=(req,res,next)=>{
    
   const cl=new Club(req.body);
   cl.save()
    
   .then((club)=>{
       return res.status(203).json({club})


   })
   .catch((error)=>{
    return res.status(400).json({error})
   })
},
exports.updateClub=(req,res,next)=>{
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown :"+req.params.id);
    const updatedClub={
        nom_club:req.body.nom_club,
        num_tel:req.body.num_tel,
        activité:req.body.activité,
        emplacement:req.body.emplacement,
        horaire:req.body.horaire,
        nom_entraineur:req.body.nom_entraineur,
        logo:req.body.logo,
    };
    Club.findByIdAndUpdate(
        req.params.id,
        {$set:updatedClub},
        {new:true}
    ) .then((club)=>{
        return res.status(203).json({updatedClub})
 
 
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })

},
exports.modif=(req,res,next)=>{
Club.updateOne({_id:req.params.id},{...req.body,_id:req.params.id})
.then(()=>res.status(200).json({message:'Objet modifié'}))
.catch(error=>res.status(200).json({error}))
},
exports.deleteClub=async(req,res,next)=>{
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown :"+req.params.id);
    Club.findByIdAndRemove(
        req.params.id,

    ).then(()=>{
        return res.status(203).json("deleted club")
    }
    )
    .catch((error)=>{
     return res.status(400).json({error})
    })

},
exports.getOneClub=async(req,res,next)=>{
    const id=req.params.id;
    Club.findOne({_id:id})
    .then((club)=>{
        return res.status(203).json({club})
    }
    )
    .catch((error)=>{
     return res.status(400).json({error})
    })
},
exports.getAllClubs=(req,res,next)=>{
    Club.find()

.then((clubs)=>{
    return res.status(203).json({clubs})
}
)
.catch((error)=>{
 return res.status(400).json({error})
})
},
exports.getClubByRegion=async(req,res,next)=>{
    let filter={}
    if(req.query.regions){
      
        filter={region:req.query.regions.split(',')}
    }
         const clubList=await Club.find(filter).populate('region');

         if(!clubList){
            res.status(500).json({success:false})
         }
}
exports.getClubByGovernement=async(req,res,next)=>{
    let filter={}
    if(req.query.gouvernements){
      
          filter={gouvernement:req.query.gouvernements.split(',')}
    }
         const clubList=await Club.find(filter).populate('gouvernement');

         if(!clubList){
            res.status(500).json({success:false})
         }
         res.status(203).json({clubList})


}
exports.createClub = (req, res, next) => {
    //const clubObject = JSON.parse(req.body.club);
   // delete clubObject._id;
    //delete clubObject._userId;
    
    const club = new Club({
         _id:new mongoose.Types.ObjectId(),
        
         nom_club:req.body.nom_club,
         num_tel:req.body.num_tel,
         activite:req.body.activite,
         emplacement:req.body.emplacement,
         nom_entraineur:req.body.nom_entraineur,
         logo:req.file.path,
        //userId: req.auth.userId,
    //logo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    
    });
  console.log(req.file);
    club.save()
    .then(() => { res.status(201).json({message: 'Club enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };