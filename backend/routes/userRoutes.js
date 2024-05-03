import express from 'express';
const router = express.Router();
import { createUser, login, test, logout, createPost, getPosts, addLikes, dislike} from '../controllers/userController.js';

router.route('/').post(createUser);
router.route('/login').post(login);
router.route('/test').get(test);
router.route('/logout').post(logout);
router.route('/addpost').post(createPost);
router.route('/posts').get(getPosts); 
router.route('/addLike').put(addLikes);
router.route('/dislike').put(dislike);


export default router;
