import express from 'express';
import likeRoutes from './routes/likeRoutes';

const app = express();

app.use(express.json());
app.use('/api', likeRoutes); // Add API prefix

// ...other middleware and routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
