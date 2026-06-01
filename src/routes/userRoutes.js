import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { updateUserAvatar } from '../controllers/userController.js';
import { upload } from '../middleware/multer.js';

const router = Router();

router.patch(
  '/users/me/avatar',
  authenticate,
  upload.single('avatar'), //на front(i) <form><input name='avatar'></form>
  updateUserAvatar,
);

export default router;
