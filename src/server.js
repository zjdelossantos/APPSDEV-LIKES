import express from 'express';
import likeRoutes from './routes/likeRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Use like routes
app.use('/api', likeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
