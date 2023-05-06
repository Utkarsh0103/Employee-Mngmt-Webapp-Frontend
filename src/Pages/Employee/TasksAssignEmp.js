import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { getUserID } from '../../BackendConn/auth';
import { myAxios } from '../../BackendConn/helper';

export default function TasksAssignEmp() {
    let navigate = useNavigate();
    const id = getUserID()

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        loadTasks();
    }, [])

    const loadTasks = async () => {
        const result = await myAxios.get(`/employees/${id}/tasks`)
        setTasks(result.data);
    }
    return (
        <div className="container">
            <br />
            <h2>Tasks Assigned</h2>
            <div className="py-4">
                <table class="table table-striped shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task Description</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            tasks.map((task, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{task.taskDesc}</td>
                                    <td>{task.target}</td>
                                    <td>{task.status}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-2" to={`/taskProgUpd/${task.taskId}`} >Update Progress</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger" onClick={() => navigate("/empHome")}>Back</button>
        </div>
    )
}
