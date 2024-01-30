import express from 'express';
import {router} from './routes/tasks.js'
const app = express();

app.use(express.json());

app.get("/hello",(req,res)=>{
    res.send("Hello world");
})

app.use("/api/v1/tasks",router);


const port = 3000;

app.listen(port, console.log(`Server is running on port ${port}...`));