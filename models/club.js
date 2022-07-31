const mongoose =require('mongoose');

const club=mongoose.Schema({
         nom_club:{
            type:String,
            required:true,
         },
         num_tel:{
            type:String,
            required:true,
         },
         activité:{
            type:String,
            required:true,
         },
        emplacement:{
            type:String,
            required:true,
         },
        horraire:{
            type:String,
            required:true,
         },
         nom_entraineur:{
            type:String,
            required:true,
         },
         logo:{
            type:String,
            required:false,
         },

});
module.exports=mongoose.model('/club',club);