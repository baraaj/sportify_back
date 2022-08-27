const mongoose =require('mongoose');

const club=mongoose.Schema({
         nom_club:{
            type:String,
            required:true,
            default:null, 
         },
         num_tel:{
            type:[String],
            default:null,
         },
         activite:{
            type:[String],
            default:null,
         },
        emplacement:{
            type:String,
            required:true,
            default:null, 
         },
         nom_entraineur:{
            type:String,
            default:null,
             
         },
         logo:{
            type:String,
            default:null, 
         },
        region:{
            type:String,
            default:null, 
         },
        gouvernement:{
            type:String,
            default:null, 
            required:true, 
         },

      
       // temps:{
            //type:mongoose.Schema.Types.Array,
           //ref:"temp",
           
           // default:null,
            //trim:true,
          /*  type:[{
               jour:{type:String},
               horaire:{type:String}

            }],}*/
           
          temps:  [
            {
                jour: {
                    type: String,
                    default:null
                },
                horaire: {
                    type: String,
                    default:null, // required informs for missing fields
                }
            }
            
        ],
         
          
          

});
module.exports=mongoose.model('Club',club);