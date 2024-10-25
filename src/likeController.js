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
};
