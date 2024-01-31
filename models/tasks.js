import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20,"name cannot be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model('Task',TaskSchema);

export { Task };