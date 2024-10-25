<<<<<<< HEAD
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Thread from './Thread';
import Comment from './Comment';

// Define the Like model
const Like = sequelize.define('Like', {
    thread_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Thread,
            key: 'id'
        },
        allowNull: true,
        onDelete: 'CASCADE'
    },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Comment,
            key: 'id'
        },
        allowNull: true,
        onDelete: 'CASCADE'
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

export default Like; // Use ES6 export
=======
import { connection } from '../core/database.js';

class Like {
  
  async add(thread_id, account_id) {
    const query = `
      INSERT INTO likes (thread_id, account_id, liked_at)
      VALUES (?, ?, NOW())
    `;
    
    try {
      const [result] = await connection.execute(query, [thread_id, account_id]);
      return result;
    } catch (err) {
      console.error('Error adding like:', err.message);
      throw err;
    }
  }

  async remove(thread_id, account_id) {
    const query = `
      DELETE FROM likes
      WHERE thread_id = ? AND account_id = ?
    `;

    try {
      const [result] = await connection.execute(query, [thread_id, account_id]);
      return result;
    } catch (err) {
      console.error('Error removing like:', err.message);
      throw err;
    }
  }

  async getAllLikes(thread_id) {
    const query = `
      SELECT * FROM likes WHERE thread_id = ?
    `;
    try {
      const [likes] = await connection.execute(query, [thread_id]);
      return likes;
    } catch (err) {
      console.error('Error fetching likes:', err.message);
      throw err;
    }
  }

  async hasLiked(thread_id, account_id) {
    const query = `
      SELECT * FROM likes WHERE thread_id = ? AND account_id = ?
    `;
    try {
      const [likes] = await connection.execute(query, [thread_id, account_id]);
      return likes.length > 0;
    } catch (err) {
      console.error('Error checking like status:', err.message);
      throw err;
    }
  }
}

export default Like;
>>>>>>> 3a780ec (In progress CRUD likes :construction:)
