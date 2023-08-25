import express from "express"
import { uploadImage,downloadImage } from "../controller/imageController.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.get('/health', (req, res)=> res.status(200).json('SErver is up and running!'));
router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage)

export default router;