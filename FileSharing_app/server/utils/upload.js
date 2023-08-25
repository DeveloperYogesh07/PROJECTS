import multer from "multer";

 let DIR = '/uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (!fs.existsSync(DIR)) {
        fs.mkdirSync(DIR);
      }
      cb(null, DIR);
    },
    filename: function (req, file, cb) {
      const filename = file.originalname;
      const fileExtension = filename.split(".")[1];
      cb(null, Date.now() + "." + fileExtension);
    }
  });
  const upload = multer({
    limits: {
      fileSize: 14048576, // 15MB limit
    }, 
    storage: storage
  });
   

export default upload;