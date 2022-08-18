const mongoose =require('mongoose');

const club=mongoose.Schema({
         nom_club:{
            type:String,
            required:true,
         },
         num_tel:{
            type:[String],
            default:null,
         },
         activite:{
            type:[String],
            required:true,
         },
        emplacement:{
            type:String,
            required:true,
         },
         nom_entraineur:{
            type:String,
            default:null,
             
         },
         logo:{
            type:String,
            
         },
        region:{
            type:String,
            default:null, 
         },
        gouvernement:{
            type:String,
             
            required:true, 
         },

      
        temps:{
            type:mongoose.Schema.Types.Array,
            ref:"temps",
            default:null,
            trim:true,

         }
          
          

});
module.exports=mongoose.model('Club',club);