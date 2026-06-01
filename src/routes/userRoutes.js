import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { updateUserAvatar } from '../controllers/userController.js';
import { avatarUpload } from '../middleware/multer.js';

const router = Router();

router.patch(
  '/users/me/avatar',
  authenticate,
  avatarUpload.single('user_avatar'), //user_avatar - на front(i) <form><input name='user_avatar'></form>
  updateUserAvatar,
);

export default router;
