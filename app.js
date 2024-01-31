import express from 'express';
import {router} from './routes/tasks.js'
import connectDB from './db/connect.js'; './db/connect.js';
import notFound from './middleware/notFound.js';
import dotenv from 'dotenv';
import errorHandlerMiddleware from './middleware/errorHandler.js';
const app = express();

dotenv.config();

app.use(express.static("./public"));

app.use(express.json());


app.use("/api/v1/tasks",router);

app.use(notFound);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();