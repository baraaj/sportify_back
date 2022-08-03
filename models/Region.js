const mongoose =require('mongoose');
const gouvernement=mongoose.Schema({
    nom_r:{
        type:String,
        required:true,
     }
    });
    module.exports=mongoose.model('Region',region);