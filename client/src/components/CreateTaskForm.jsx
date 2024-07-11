import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
const CreateTaskForm = () => {
    const [taskStatus, setTaskStatus] = useState("Not Completed");
    let navigate = useNavigate()
    const taskInfo = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let taskTitle = formData.get("taskTitle")
        let taskDescription = formData.get("taskDescription")
        let res = await axios.post(`api/createTask`,{
            taskTitle:taskTitle,
            taskDescription:taskDescription,
            taskStatus:taskStatus,
        })
        if (res.data["status"] === "Success") {
            navigate("/")
        } else {
            navigate("/createTask")
        }
    }
    const handleStatusChange = (e) => {
        setTaskStatus(e.target.value);
    }
    return (
        <div className="container mt-5">
            <Link to="/">
                <i className="bi bi-house"></i>
            </Link>
            <div className="row justify-content-center">
                <div className="col-12 card shadow mb-5 p-4">

                    <h1 className="mb-5 text-center">Add Your Daily Tasks</h1>
                    <form onSubmit={taskInfo}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputTT" className="form-label">
                                Task Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputTT"
                                name="taskTitle"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputDesk" className="form-label">
                                Task Description
                            </label>
                            <textarea
                                rows="3"
                                className="form-control"
                                id="exampleInputDesk"
                                name="taskDescription"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="taskStatus"
                                       id="inlineRadio1" value="Not Completed"
                                       checked={taskStatus === "Not Completed"}
                                       onChange={handleStatusChange}
                                />
                                <label className="form-check-label" htmlFor="inlineRadio1">Not Completed</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="taskStatus"
                                       id="inlineRadio2" value="Completed"
                                       checked={taskStatus === "Completed"}
                                       onChange={handleStatusChange}
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">Completed</label>
                            </div>
                        </div>

                        <button type="submit"
                                className="btn submitbtn btn-outline-warning w-100 mt-3">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskForm;