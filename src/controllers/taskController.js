const tasks = require("../models/taskModel");

exports.createTask = async (req, res) => {
    try {
        let taskData = req.body;
        await tasks.create(taskData);
        res
            .status(201)
            .json({ status: "Success", message: "Created data successfully" });
    } catch (error) {
        res.status(401).json({ status: "fail", message: error });
    }
};
exports.readTask = async (req, res) => {
    try {
        let data = await tasks.aggregate([
            {
                $project: {
                    createdAt: 0,
                    updatedAt: 0
                },
            },
        ]);
        res.json({ status: "Success", Task_data: data });
    } catch (error) {
        res.json({ status: "Fail", data: error });
    }
};

exports.readBYId = async (req,res)=>{
    try {
        let {id}=req.params
        const data = await tasks.find(
            { _id: id},
            {  createdAt: 0, updatedAt: 0 }
        );

        res.json({status: "Success", TaskData: data});
    } catch (e) {
        res.json({status: "Fail", data: e});
    }
}

exports.updateTask = async (req, res) => {
    try {
        let taskData = req.body;
        let { id } = req.params;
        let task = await tasks.find({
            _id: id,
        });
        if (task.length > 0) {
            await tasks.updateOne({ _id: id }, { $set: taskData });
            res.json({ status: "Success", message: "Data successfully updated" });
        } else {
            res.json({ status: "Fail", message: "No task found" });
        }
    } catch (error) {
        res.json({ status: "Fail", message: error });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        let { id } = req.params;
        let task = await tasks.find({
            _id: id,
        });
        if (task.length > 0) {
            await tasks.deleteOne({ _id: id });
            res.json({ status: "Success", message: "Data successfully deleted" });
        } else {
            res.json({ status: "Fail", message: "No task found" });
        }
    } catch (error) {
        res.json({ status: "Fail", message: error });
    }
};

