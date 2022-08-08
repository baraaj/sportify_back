 const express=require('express');
 const auth=require('../middleware/auth');
 const multer = require('../middleware/multer-config');
 const router=express.Router();
 const ClubCtrl=require('../controllers/club');


 //router.post('/',auth,multer/ClubCtrl.ajoutClub);
router.post('/',multer,ClubCtrl.ajoutClub);
router.put("/:id",ClubCtrl.updateClub);
router.delete("/:id",ClubCtrl.deleteClub);
router.get("/:id",ClubCtrl.getOneClub);
router.get("/",ClubCtrl.getAllClubs);
//router.get("/",ClubCtrl.getClubByRegion);
router.get("/",ClubCtrl.getClubByGovernement);
app.use('/images', express.static(path.join(__dirname, 'images')));
 module.exports=router;