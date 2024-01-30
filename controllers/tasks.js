const getAllTasks = (req,res) => {
    res.send("get All tasks")
}

const getTask = (req,res) => {
    res.json({id: req.params.id})
}

const createTask = (req,res) => {
    res.json(req.body)
}

const updateTask = (req,res) => {
    res.send("update tasks")
}

const deleteTask = (req,res) => {
    res.send("delete task")
}

export {getAllTasks, getTask, createTask, updateTask, deleteTask}