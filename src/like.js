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
