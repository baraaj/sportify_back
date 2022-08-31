 const express=require('express');
 const auth=require('../middleware/auth');
 const router=express.Router();
 const ClubCtrl=require('../controllers/club');
const multer = require('multer');
const images = multer({dest: '../uploads/'})
const path=require('path');
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    callback(null,Date.now()+'_'+name);
  }
});
const upload=multer({storage:Storage}).single('logo');
 //router.post('/',auth,multer/ClubCtrl.ajoutClub);
//router.post('/',ClubCtrl.ajoutClub);
router.post('/',upload,ClubCtrl.createClub);
router.put("/:id",upload,ClubCtrl.updateClub);
router.delete("/:id",ClubCtrl.deleteClub);
router.get("/:id",ClubCtrl.getOneClub);
router.get("/",ClubCtrl.getAllClubs);
//router.get("/find/region/:region",ClubCtrl.getClubByRegion);
//router.get("/find/gouvernement/:gouvernement",ClubCtrl.getClubByGovernement);
router.get('/activity/:gouvernement/:region',ClubCtrl.indexactivty);
router.get('/find/:activite/:gouvernement/:region',ClubCtrl.findByAct)
router.get('/findgouvernement/:gouvernement/:region',ClubCtrl.findByGouv)

 module.exports=router;