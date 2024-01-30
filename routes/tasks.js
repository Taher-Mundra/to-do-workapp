import express from 'express';
import { getAllTasks, deleteTask, getTask, createTask, updateTask } from '../controllers/tasks.js';
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export  {router};