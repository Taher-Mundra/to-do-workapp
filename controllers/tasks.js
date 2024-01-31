import { Task } from "../models/tasks.js"
import asyncWrapper from '../middleware/async.js'
import { customAPIError, creatCustomError } from "../errors/custom-error.js";

const getAllTasks = asyncWrapper( async (req,res) => {
        const allTasks = await Task.find({});
        res.status(200).send({tasks: allTasks});        
})

const getTask = asyncWrapper( async (req,res,next) => {

        const {id:taskID} = req.params;
        const singleTask = await Task.findOne({_id: taskID});
        if(!singleTask){
            return next(creatCustomError("task is not present",404))
        }
        res.status(200).json({task: singleTask});   
})

const createTask = asyncWrapper( async (req,res) => {

        const newTask = await Task.create(req.body);
        res.status(201).json({newTask});        

})

const updateTask = asyncWrapper( async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID},req.body,
            {
                new: true,
                runValidators: true, 
            });
        if(!task){
            return next(creatCustomError("task is not present",404))
        }    
        res.status(200).json({task})
})

const deleteTask = asyncWrapper( async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return next(creatCustomError("task is not present",404))
        }
        res.status(200).json({task});   
})

export {getAllTasks, getTask, createTask, updateTask, deleteTask}