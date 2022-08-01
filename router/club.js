 const express=require('express');
 const router=express.Router();
 const ClubCtrl=require('../controllers/club');

router.post('/',ClubCtrl.ajoutClub);


 module.exports=router;