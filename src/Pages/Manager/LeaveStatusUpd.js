import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { myAxios } from '../../BackendConn/helper';

export default function LeaveStatusUpd() {
    let navigate = useNavigate();

    const { id } = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        const result = await myAxios.get(`/managers/leave/${id}`)
        setDetails(result.data);
    }

    const submitForm = async (event) => {
        event.preventDefault()

        //calling server api
        await myAxios.put(`/managers/leaves/${id}`, details)
        navigate("/leavesReq")
    }

    const handleChange = (event, property) => {
        setDetails({ ...details, [property]: event.target.value })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                        <h2 className="text-center m-4">Update Leave status</h2>
                        <form className="row g-3" onSubmit={(e)=>submitForm(e)}>
                            <div className="text-start col-12">
                                <label for="inputName" className="form-label">Requested by</label>
                                <input type="text" value={details.name} className="form-control" id="inputName" disabled readOnly />
                            </div>
                            <div className="text-start col-12">
                                <label for="floatingTextarea" className="form-label">Leave Reason</label>
                                <textarea class="form-control" value={details.reason} id="floatingTextarea" style={{ height: "120px" }} disabled readOnly></textarea>

                            </div>
                            <div className="text-start col-6">
                                <label for="inputdate" className="form-label">Requested for</label>
                                <input type="date" value={details.adate} className="form-control" id="inputdate" disabled readOnly />
                            </div>
                            <div className="text-start col-md-6">
                                <label for="inputStatus" className="form-label">Status</label>
                                <select id="inputStatus" value={details.status} className="form-select" onChange={(e) => handleChange(e, 'status')} required>
                                    <option selected disabled value=""></option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-success me-2">Update</button>
                                <button className="btn btn-outline-danger" onClick={() => navigate("/leavesReq")}>Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
