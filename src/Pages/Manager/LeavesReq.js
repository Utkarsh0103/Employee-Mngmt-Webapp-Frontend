import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { getUserID } from '../../BackendConn/auth';
import { myAxios } from '../../BackendConn/helper';

export default function LeavesReq() {
    let navigate = useNavigate();

    const id = getUserID()

    const [leaves, setLeaves] = useState([])

    useEffect(() => {
        loadLeaves();
    }, [])

    const loadLeaves = async () => {
        const result = await myAxios.get(`/managers/${id}/leaves`)
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
                            <th scope="col">Requested by</th>
                            <th scope="col">Requested for</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            leaves.map((leave, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{leave.name}</td>
                                    <td>{leave.adate}</td>
                                    <td>{leave.status}</td>
                                    <td>
                                    <Link className="btn btn-outline-primary mx-2" to={`/leaveStatusUpd/${leave.leaveId}`}>View</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger" onClick={()=>navigate("/mgrHome")}>Back</button>
        </div>
    )
}
