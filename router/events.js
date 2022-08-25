const express=require('express');
const auth=require('../middleware/auth');
const router=express.Router();
const EventsController=require('../controllers/events');
const multer=require(  '../middleware/multer-config');


router.get('/',EventsController.index)
router.get('/showevents/:id',EventsController.show)
router.post('/storeevent',upload,EventsController.store)
router.put('/updateevent/:id',upload,EventsController.update)
router.delete('/deleteevent/:id',EventsController.destroy)










module.exports=router;