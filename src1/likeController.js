import Like from '../models/like.js';

const likeModel = new Like();

export const addLike = async (req, res) => {
  const { thread_id, account_id } = req.body;
  
  try {
    await likeModel.add(thread_id, account_id);
    res.status(201).json({ message: 'Like added successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding like', error: err.message });
  }
};

export const removeLike = async (req, res) => {
  const { thread_id, account_id } = req.body;

  try {
    await likeModel.remove(thread_id, account_id);
    res.status(200).json({ message: 'Like removed successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing like', error: err.message });
  }
};

export const getAllLikes = async (req, res) => {
  const { thread_id } = req.params;

  try {
    const likes = await likeModel.getAllLikes(thread_id);
    res.status(200).json(likes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching likes', error: err.message });
  }
};

export const hasLiked = async (req, res) => {
  const { thread_id, account_id } = req.params;

  try {
    const liked = await likeModel.hasLiked(thread_id, account_id);
    res.status(200).json({ liked });
  } catch (err) {
    res.status(500).json({ message: 'Error checking like status', error: err.message });
  }
};
