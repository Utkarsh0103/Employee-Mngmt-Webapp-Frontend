import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getUserID } from '../../BackendConn/auth';
import { myAxios } from '../../BackendConn/helper';

export default function EmpLeaves() {
    let navigate = useNavigate();
    const id = getUserID()

    const [leaves, setLeaves] = useState([])

    useEffect(() => {
        loadLeaves();
    }, [])

    const loadLeaves = async () => {
        const result = await myAxios.get(`/employees/${id}/leaves`)
        setLeaves(result.data);
    }

    return (
        <div className="container">
            <br />
            <h2>Leaves Requested</h2>
            <div className="py-4">
                <table class="table table-striped shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Leave Reason</th>
                            <th scope="col">Requested for</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            leaves.map((leave, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{leave.reason}</td>
                                    <td>{leave.adate}</td>
                                    <td>{leave.status}</td>
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
