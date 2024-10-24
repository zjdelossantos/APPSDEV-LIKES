import express from 'express';
import { addLike, removeLike, getAllLikes, hasLiked } from '../controllers/likeController.js';

const router = express.Router();

router.post('/like', addLike);
router.delete('/like', removeLike);
router.get('/likes/:thread_id', getAllLikes);
router.get('/like-status/:thread_id/:account_id', hasLiked);

export default router;
