import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { myAxios } from '../../BackendConn/helper';

export default function AddTasks() {
    let navigate = useNavigate();

    const { id } = useParams()

    const [emp, setEmp] = useState([])

    useEffect(() => {
        loadEmp();
    }, [])

    const loadEmp = async () => {
        const result = await myAxios.get(`/managers/employee/${id}`)
        setEmp(result.data);
    }

    const [data, setData] = useState({

        taskDesc: '',
        target: '',
        status: 'Assigned'
    })

    const submitForm = async (event) => {
        event.preventDefault()

        //calling server api
        await myAxios.post(`/managers/employee/${id}/task`, data)
        navigate("/assigningTask")
    }

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center m-4">Assign Task</h2>
                    <form className="row g-3" onSubmit={(e)=>submitForm(e)}>
                        <div className="text-start col-12">
                            <label for="inputName" className="form-label">Assigned to</label>
                            <input type="text" value={emp.name} className="form-control" id="inputName" disabled readOnly />
                        </div>
                        <div className="text-start col-12">
                            <label for="floatingTextarea" className="form-label">Task Description</label>
                            <textarea class="form-control" id="floatingTextarea" style={{height: "120px"}} onChange={(e) => handleChange(e, 'taskDesc')} required></textarea>
                        </div>
                        <div className="text-start col-6">
                            <label for="inputDeadline" className="form-label">Deadline</label>
                            <input type="date" className="form-control" id="inputDeadline" onChange={(e) => handleChange(e, 'target')} required />
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputProgress" className="form-label">Progress</label>
                            <input type="text" value="Assigned" className="form-control" id="inputProgress" disabled readOnly />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button className="btn btn-danger" onClick={()=>navigate("/assigningTask")}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
