import express from 'express';
import noteRouter from './routes/note.route.js';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import errorHandler from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Note Api is running');
});

app.use('/api/v1', noteRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
