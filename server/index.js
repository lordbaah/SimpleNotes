import express from 'express';
import noteRouter from './routes/note.route.js';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Note Api is running');
});

app.use('/api/v1', noteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
