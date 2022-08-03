const express=require('express');
const auth=require('../middleware/auth');
const router=express.Router();
const GouvCtrl=require('../controllers/gouvernement');

router.post('/',GouvCtrl.ajoutGouv);



module.exports=router;