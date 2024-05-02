import express from 'express';
const router = express.Router();
import { createUser, login, test, logout} from '../controllers/userController.js';

router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/test').get(test);
router.route('/logout').post(logout);

export default router;
