const mongoose =require('mongoose');

const club=mongoose.Schema({
         nom_club:{
            type:String,
            required:true,
         },
         num_tel:{
            type:String,
             
         },
         activité:{
            type:String,
            required:true,
         },
        emplacement:{
            type:String,
            required:true,
         },
        horaire:{
            type:String,
            required:true,
         },
         nom_entraineur:{
            type:String,
             
         },
         logo:{
            type:String,
             
         }

});
module.exports=mongoose.model('Club',club);