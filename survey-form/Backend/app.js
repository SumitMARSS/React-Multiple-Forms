import express from 'express';
import technology from './routes/technology.js';
import health from "./routes/health.js";
import education from "./routes/education.js";
export const app = express();
import cors from 'cors';

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the survey API!');
});

app.use('/technology', technology);
app.use('/health', health);
app.use('/education', education);