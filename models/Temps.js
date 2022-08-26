const mongoose =require('mongoose');
const temps=mongoose.Schema({

    jour:{
        type:String,
        required:true,
        default:null,
     },
     horaire:{
        type:String,
        required:true, 
        default:null,
     }























     

});
module.exports=mongoose.model('Temps',temp);