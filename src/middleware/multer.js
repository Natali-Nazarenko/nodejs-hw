import multer from 'multer';

//додає інфу про файл, як req.file
export const avatarUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter(req, file, callback) {
    if (!file.mimetype || !file.mimetype.startsWith('image/')) {
      return callback(new Error('Invalid file type! Expected image!'));
    }
    //success
    callback(null, true);
  },
});
