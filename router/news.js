const express=require('express');
const auth=require('../middleware/auth');
const router=express.Router();
const NewsController=require('../controllers/news');
const multer=require(  '../middleware/multer-config');


router.get('/',NewsController.index)
router.get('/shownews/:id',NewsController.show)
router.post('/stornews',upload,NewsController.store)
router.put('/updatenews/:id',upload,NewsController.update)
router.delete('/deletenews/:id',NewsController.destroy)



module.exports =router













module.exports=router;