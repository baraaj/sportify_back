 const express=require('express');
 const auth=require('../middleware/auth');
 const router=express.Router();
 const ClubCtrl=require('../controllers/club');
const multer=require(  '../middleware/multer-config');
 
 //router.post('/',auth,multer/ClubCtrl.ajoutClub);
//router.post('/',ClubCtrl.ajoutClub);
router.post('/',multer,ClubCtrl.createClub);
router.put("/:id",multer,ClubCtrl.updateClub);
router.delete("/:id",ClubCtrl.deleteClub);
router.get("/:id",ClubCtrl.getOneClub);
router.get("/",ClubCtrl.getAllClubs);
router.get("/find/region/:region",ClubCtrl.getClubByRegion);
router.get("/find/gouvernement/:gouvernement",ClubCtrl.getClubByGovernement);
router.get("/findact/:activite",ClubCtrl.findByAct);

 module.exports=router;