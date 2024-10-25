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
