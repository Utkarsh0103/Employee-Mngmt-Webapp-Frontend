import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getUserID } from '../../BackendConn/auth';
import { myAxios } from '../../BackendConn/helper';

export default function AddLeave() {
    let navigate = useNavigate();

    const id = getUserID()

    const [data, setData] = useState({

        reason: '',
        adate: ''
    })

    //handle change
    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value })
    }

    //submitting the form
    const submitForm = async (event) => {
        event.preventDefault()

        //calling server api
        await myAxios.post(`/employees/${id}/leaves`, data)
        navigate("/empHome")
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center m-4">Apply for Leave</h2>
                    <form className="row g-3" onSubmit={(e)=>submitForm(e)}>
                        <div className="text-start col-12">
                            <label for="floatingTextarea" className="form-label">Leave Reason</label>
                            <textarea class="form-control" id="floatingTextarea" style={{height: "120px"}} onChange={(e) => handleChange(e, 'reason')} required></textarea>
                        </div>
                        <div className="text-start col-6">
                            <label for="inputDeadline" className="form-label">Request for</label>
                            <input type="date" className="form-control" id="inputDeadline" onChange={(e) => handleChange(e, 'adate')} required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button className="btn btn-danger" onClick={()=>navigate("/empHome")}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
