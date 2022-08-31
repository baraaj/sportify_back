const News=require('../models/News');
const storage=require('../middleware/multer-config')
const fs=require('fs')
const multer=require('multer')
const path=require('path');
const { extname } = require('path');
var ObjectId = require('mongodb').ObjectId;
var news=[];

const index=(req,res,next)=>{
    News.find().sort({Ordre: 'asc'})

.then((e)=>{
  
  res.status(200).json(e)
})
.catch((error)=>{
 return res.status(400).json({error})
})
}
const show=(req, res, next)=>{
   
    News.findOne({ _id: req.params.id })
      .then(e => res.status(200).json(e))
      .catch(error => res.status(404).json({ error }));
}
const store=(req,res,next)=>{
    let e=new News();
    {if(req.file && req.file.originalname)
        {e=new News({...req.body,Image:req.file.filename}, { strict: false });
       }
        else{e=new News({...req.body}, { strict: false });
        }}
    e.save()
     
    .then((e)=>{
        return res.status(203).json({e})
 
 
    })
    .catch((error)=>{
     return res.status(400).json({error})
    })
 }

//Find by id et mettre à jour des news
const update=(req, res, next)=>{
  if((req.file && req.file.originalname))
        News.updateOne({ _id: req.params.id }, { ...req.body,Image:req.file.filename, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'News updated with image successfully !'}))
          .catch(error => res.status(400).json({ error }));
    else{
       News.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'News updated without image successfully !'}))
        .catch(error => res.status(400).json({ error }));
    }
}

//delete club by id
const destroy=(req, res, next)=>{
    News.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'News deleted successfully !'}))
    .catch(error => res.status(400).json({ error }));
}
module.exports={
    index,show,store,update,destroy
}