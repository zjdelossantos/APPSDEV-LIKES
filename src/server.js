import express from 'express';
<<<<<<< HEAD
import likeRoutes from './routes/likeRoutes';

const app = express();

app.use(express.json());
app.use('/api', likeRoutes); // Add API prefix

// ...other middleware and routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
=======
import likeRoutes from './routes/likeRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Use like routes
app.use('/api', likeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
>>>>>>> 3a780ec (In progress CRUD likes :construction:)
});
