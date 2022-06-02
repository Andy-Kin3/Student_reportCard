const multer = require('multer');
const path = require('path');


//Set storage engine
const storage = multer.diskStorage({
    destination: '../Images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
// Upload variable
const upload = multer({
    storage: storage,
    limits: {fileSize: '700000000'},
    fileFilter: (req, file, cb) => {
        const fileType = /jpeg|jpg|png|gif/
        const mimetype = fileType.test(file.mimetype);
        const extname = fileType.test(path.extname(file.originalname));
        
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Give proper file format to upload");
    }
}).single('image');

module.exports = upload;