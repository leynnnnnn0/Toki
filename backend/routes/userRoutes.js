import express from 'express';
const router = express.Router();
import { createUser, login} from '../controllers/userController.js';

router.route('/').post(createUser);
router.route('/login').post(login);

export default router;
