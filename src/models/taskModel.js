const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
    {
        taskTitle: { type: String, require: true },
        taskDescription: { type: String, require: true },
        taskStatus: { type: String, require: true },
    },
    { timestamps: true, versionKey: false }
);
const tasks = mongoose.model("tasks", TaskSchema);
module.exports = tasks;