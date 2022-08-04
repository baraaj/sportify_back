const mongoose =require('mongoose');
const temps=mongoose.Schema({

    jour:{
        type:String,
        required:true,
     },
     horaire:{
        type:String,
        required:true, 
     }


});
module.exports=mongoose.model('Temps',temps);