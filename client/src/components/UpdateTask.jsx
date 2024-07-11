import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateTask = () => {
    let navigate = useNavigate()
    let [task, setTask] = useState(null);
    let {id} = useParams()
    useEffect(() => {
        (async () => {
            await CreatedTask(id)
        })()
    }, []);

    const CreatedTask = async (id) => {
        let res = await axios.get(`/api/readBYId/${id}`)
        setTask(res.data["TaskData"][0])
    }

    const taskInfo = async (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        let taskTitle = formData.get("taskTitle")
        let taskDescription = formData.get("taskDescription")
        let taskStatus = formData.get("taskStatus")
        let res = await axios.put(`/api/updateTask/${id}`,{
            taskTitle:taskTitle,
            taskDescription:taskDescription,
            taskStatus:taskStatus,
        })
        if (res.data["status"] === "Success") {
            navigate("/")
        } else {
            navigate(`/updateTask/${id}`)
        }
    }
    const handleStatusChange = (e) => {
        setTask({ ...task, taskStatus: e.target.value });
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
                                defaultValue={task !== null ? (task["taskTitle"]) : ""}
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
                                defaultValue={task !== null ? (task["taskDescription"]) : ""}
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
                                       checked={task !== null && task["taskStatus"] === "Not Completed"}
                                       onChange={handleStatusChange}/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Not Completed</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="taskStatus"
                                       id="inlineRadio2" value="Completed"
                                       checked={task !== null && task["taskStatus"] === "Completed"}
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

export default UpdateTask;