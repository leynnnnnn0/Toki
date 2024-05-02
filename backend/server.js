import express from 'express';
import { config as configDotenv } from 'dotenv';
import router from './routes/userRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors'
const app = express();
configDotenv();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

mongoose.connect('mongodb://localhost:27017/toki')

app.use("/api/users", router);

app.listen(8000, () => {
    console.log(`Server is running.`);
});