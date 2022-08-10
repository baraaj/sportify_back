const multer = require('multer');
 
 const fileFilter=(req,file,callback)=>{
  if(file.mimetype==='image/jpeg' ||file.mimetype==='image/jpg' ||file.mimetype==='image/png'){callback(null,true) }
  else{
    callback(null,false)
   }
  
 };

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    //const extension = MIME_TYPES[file.mimetype];
    callback(null,  Date.now().toString()+ file.originalname );
  }
});


module.exports = multer({storage: storage,fileFilter:fileFilter,limits:{fieldSize:1024*1024*5}}).single('logo');