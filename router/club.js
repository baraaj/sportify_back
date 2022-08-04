 const express=require('express');
 const auth=require('../middleware/auth');
 const multer = require('../middleware/multer-config');
 const router=express.Router();
 const ClubCtrl=require('../controllers/club');


 //router.post('/',auth,ClubCtrl.ajoutClub);
router.post('/',ClubCtrl.ajoutClub);
router.put("/:id",ClubCtrl.updateClub);
router.delete("/:id",ClubCtrl.deleteClub);
router.get("/:id",ClubCtrl.getOneClub);
router.get("/",ClubCtrl.getAllClubs);
//router.get("/",ClubCtrl.getClubByRegion);
router.get("/",ClubCtrl.getClubByGovernement);
 module.exports=router;