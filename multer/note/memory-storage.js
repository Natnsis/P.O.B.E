import multer from "multer";
import streamifier from "streamifier";
import { v2 as cloudinary } from "cloudinary";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadImage = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((result, err) => {
      if (err) reject(err);
      resolve(result);
    });
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

const tryIt = await uploadImage(req.file.buffer);
