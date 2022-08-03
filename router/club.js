 const express=require('express');
 const router=express.Router();
 const ClubCtrl=require('../controllers/club');

router.post('/',ClubCtrl.ajoutClub);
router.put("/:id",ClubCtrl.updateClub);
router.delete("/:id",ClubCtrl.deleteClub);
router.get("/:id",ClubCtrl.getOneClub);
router.get("/",ClubCtrl.getAllClubs);
router.get("/?regions",ClubCtrl.getClubByRegion);
router.get("/?governements",ClubCtrl.getClubByGovernement);
 module.exports=router;