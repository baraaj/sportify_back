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
         nom_entraineur:{
            type:String,
             
         },
         logo:{
            type:String,
             
         },

         region:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Region'
            
             
         },
         gouvernement:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Gouvernement',
            

         },
         temps:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Temps',
            

         }
          

});
module.exports=mongoose.model('Club',club);