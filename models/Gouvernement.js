const mongoose =require('mongoose');
const gouvernement=mongoose.Schema({
    nom_g:{
        type:String,
        required:true,
     }
    });
    module.exports=mongoose.model('Gouvernement',gouvernement);