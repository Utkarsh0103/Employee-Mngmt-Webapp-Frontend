import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { getUserID } from '../../BackendConn/auth';
import { myAxios } from '../../BackendConn/helper';

export default function AssigningTask() {
    let navigate = useNavigate();
    const id = getUserID()

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadEmployees();
    }, [])

    const loadEmployees = async () => {
        const result = await myAxios.get(`/managers/${id}/employees`)
        setEmployees(result.data);
    }

    return (
        <div className="container">
            <br />
            <h2>Assigning Tasks</h2>
            <div className="py-4">
                <table class="table table-striped shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            employees.map((employee, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-2" to={`/addTasks/${employee.empId}`} >Add Task</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger" onClick={() => navigate("/mgrHome")}>Back</button>
        </div>
    )
}
