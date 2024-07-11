import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import FullScreenLoader from "./FullScreenLoader.jsx";

const TaskById = () => {
    let [task, setTask] = useState(null);
    const [loader, setLoader] = useState(true);
    let navigate = useNavigate()
    let {id} = useParams()
    useEffect(() => {
        (async () => {
            await CreatedTask(id)
        })()
    }, []);

    const CreatedTask = async (id) => {
        setLoader(true);
        let res = await axios.get(`/api/readBYId/${id}`)
        setTask(res.data["TaskData"][0])
        setLoader(false);
    }

    const DeleteTasks = async (id) => {
        try {
            await axios.delete(`/api/deleteTask/${id}`);
            navigate("/")
        } catch (error) {
            console.error("Error fetching Tasks:", error);
        }
    };

    return (
        <div className="container my-5">
            <Link to="/">
                <i className="bi bi-house"></i>
            </Link>
            <h1>Your Task</h1>
            {
                loader ? (
                    <FullScreenLoader/>
                ) : (
                    <div className="row my-5">
                        <div className="col-12">
                            <div className="card shadow my-3">
                                <div className="card-header">
                                    <h3 className="position-relative">
                                        {task !== null ? (task["taskTitle"]) : ""}
                                        <span
                                            className="position-absolute top-0 start-100 ms-5 si translate-middle badge rounded-pill bg-danger">
                                    {task !== null ? (task["taskStatus"]) : ""}
                                            <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                                    </h3>
                                    <div className="dropdown">
                                        <a className="btn btn-warning dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            Action
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    to={`/updateTask/${task !== null ? (task["_id"]) : ""}`}
                                                >
                                                    Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={() => DeleteTasks(task !== null ? (task["_id"]) : "")}
                                                >
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>{task !== null ? (task["taskDescription"]) : ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default TaskById;