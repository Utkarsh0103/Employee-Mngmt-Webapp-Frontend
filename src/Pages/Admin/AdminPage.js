import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { myAxios } from '../../BackendConn/helper'

export default function AdminPage() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await myAxios.get("/admin/employees")
        setUsers(result.data);
    }

    return (
        <div className="container-sm">
            <br />
            <h2>List of All Employees</h2>
            <div className="py-4">
                <table className="table table-striped table-fixed shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Manager Assigned</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">

                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key ={index}>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mgrName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Link type="button" className="btn btn-primary col-md-4" to="/adduser">Add User</Link>
            </div>

        </div>
    )
}
