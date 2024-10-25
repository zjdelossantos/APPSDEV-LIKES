import express from 'express';
<<<<<<< HEAD
import { createLike, getLikes, getLikeById, updateLike, deleteLike } from '../controllers/likeController';

const router = express.Router();

router.post('/likes', createLike);
router.get('/likes', getLikes);
router.get('/likes/:id', getLikeById);
router.put('/likes/:id', updateLike);
router.delete('/likes/:id', deleteLike);
=======
import { addLike, removeLike, getAllLikes, hasLiked } from '../controllers/likeController.js';

const router = express.Router();

router.post('/like', addLike);
router.delete('/like', removeLike);
router.get('/likes/:thread_id', getAllLikes);
router.get('/like-status/:thread_id/:account_id', hasLiked);
>>>>>>> 3a780ec (In progress CRUD likes :construction:)

export default router;
