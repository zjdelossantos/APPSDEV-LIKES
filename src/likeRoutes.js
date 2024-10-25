import express from 'express';
import { createLike, getLikes, getLikeById, updateLike, deleteLike } from '../controllers/likeController';

const router = express.Router();

router.post('/likes', createLike);
router.get('/likes', getLikes);
router.get('/likes/:id', getLikeById);
router.put('/likes/:id', updateLike);
router.delete('/likes/:id', deleteLike);

export default router;
