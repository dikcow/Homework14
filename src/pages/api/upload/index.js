import nextConnect from "next-connect";
import multer from "multer";
import path from "path";

function upload() {
  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "/upload"));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
      cb(null, file.fieldname + "_" + uniqueSuffix);
    },
  });

  let upload = multer({
    storage: storage,
  });
}

let uploadFile = upload.single("file");
handler.use(uploadFile);
handler.post((req, res) => {
  console.log("req", req.file);
  console.log("body", req.body);
  rest.status(200).json({ message: "image successfuly upload" });
});

export default upload;
