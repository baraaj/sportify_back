const club = require('../models/club');
const Club=require('../models/club');
const ObjectID=require('mongoose').Types.ObjectId;

exports.ajoutClub=(req,res)=>{
   const cl=new Club(req.body);
   cl.save()
   .then((club)=>{
       return res.status(203).json({club})


   })
   .catch((error)=>{
    return res.status(400).json({error})
   })
},
exports.updateClub=(req,res)=>{
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
exports.deleteClub=async(req,res)=>{
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown :"+req.params.id);
    club.findByIdAndRemove(
        req.params.id,

    ).then(()=>{
        return res.status(203).json("deleted club")
    }
    )
    .catch((error)=>{
     return res.status(400).json({error})
    })

},
exports.getOneClub=async(req,res)=>{
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
exports.getAllClubs=(req,res)=>{
    Club.find()

.then((clubs)=>{
    return res.status(203).json({clubs})
}
)
.catch((error)=>{
 return res.status(400).json({error})
})
}