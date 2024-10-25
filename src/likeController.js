<<<<<<< HEAD
import Like from '../models/Like'; // Adjust the path as necessary

// Create a new like
export const createLike = async (req, res) => {
    try {
        const { thread_id, comment_id } = req.body;
        const like = await Like.create({ thread_id, comment_id });
        return res.status(201).json(like);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get all likes
export const getLikes = async (req, res) => {
    try {
        const likes = await Like.findAll();
        return res.status(200).json(likes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Get a specific like
export const getLikeById = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        return res.status(200).json(like);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Update a like
export const updateLike = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        const { thread_id, comment_id } = req.body;
        await like.update({ thread_id, comment_id });
        return res.status(200).json(like);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Delete a like
export const deleteLike = async (req, res) => {
    try {
        const like = await Like.findByPk(req.params.id);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
        await like.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
=======
import Like from '/models/like.js';

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
>>>>>>> 3a780ec (In progress CRUD likes :construction:)
};
