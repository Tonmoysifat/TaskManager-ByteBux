import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import NoTask from "./NoTask.jsx";

const TaskList = () => {
    const [task, setTask] = useState([]);

    useEffect(() => {
        (async () => {
            await ReadTasks();
        })();
    }, []);
    const ReadTasks = async () => {
        try {
            const res = await axios.get(`/api/readTask`);
            setTask(res.data.Task_data);
        } catch (error) {
            console.error("Error fetching Tasks:", error);
        }
    };
    const DeleteTasks = async (id) => {
        try {
            await axios.delete(`/api/deleteTask/${id}`);
            await ReadTasks();
        } catch (error) {
            console.error("Error fetching Tasks:", error);
        }
    };

    return (
        <div className="container my-5">
          <div className="headerText">
            <h1>Manage Your Daily Tasks</h1>
            <Link to="/createTask" className="btn btn-primary mt-4 mb-5">
              Add Task
            </Link>
          </div>


          {
            task.length === 0 ? (
                <NoTask/>
            ) : (
                <div className="row my-5">
                        {task.map((item, i) => {
                            return (
                                <div key={i} className="col-12">
                                    <div className="card shadow my-3">
                                        <div className="card-header">
                                            <h3 className="position-relative">
                                                <Link to={`/TaskById/${item["_id"]}`} className="text-decoration-none">{item["taskTitle"]}</Link>
                                                <span
                                                    className="position-absolute top-0 start-100 ms-5 si translate-middle badge rounded-pill bg-danger">
                          {item["taskStatus"]}
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
                                                            to={`/updateTask/${item["_id"]}`}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => DeleteTasks(item["_id"])}
                                                        >
                                                            Delete
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>{item["taskDescription"]}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            }


        </div>
    );
};

export default TaskList;
