const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();


router.post("/createTask", taskController.createTask);
router.get("/readTask", taskController.readTask);
router.get("/readBYId/:id", taskController.readBYId);
router.put("/updateTask/:id", taskController.updateTask);
router.delete("/deleteTask/:id", taskController.deleteTask);

module.exports = router;