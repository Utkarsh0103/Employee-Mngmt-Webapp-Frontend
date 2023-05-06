import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getUserID } from '../../BackendConn/auth';
import { myAxios } from '../../BackendConn/helper';

export default function EmpProfile() {
    let navigate = useNavigate();

    const id = getUserID()
    const [details, setDetails] = useState([])

    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        const result = await myAxios.get(`/employees/${id}`)
        setDetails(result.data);
    }

    const submitForm = async (event) => {
        event.preventDefault()

        //calling server api
        await myAxios.put(`/employees/${id}`, details)
        navigate("/empHome")
    }

    const handleChange = (event, property) => {
        setDetails({ ...details, [property]: event.target.value })
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center m-4">Your Details</h2>
                    <form className="row g-3" onSubmit={(e)=>submitForm(e)}>
                        <div className="text-start col-md-8">
                            <label for="inputName" className="form-label">Name</label>
                            <input type="text" value={details.name} className="form-control" id="inputName" disabled readOnly/>
                        </div>
                        <div className="text-start col-md-4">
                            <label for="inputGender" className="form-label">Gender</label>
                            <select id="inputGender" value={details.gender} className="form-select" disabled readOnly>
                                <option selected disabled value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="text-start col-6">
                            <label for="inputBirthday" className="form-label">Birthday</label>
                            <input type="date" value={details.birthDate} className="form-control" id="inputBirthday" disabled readOnly/>
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputMarSts" className="form-label">Marital Status</label>
                            <select id="inputMarSts" value={details.maritalStatus} className="form-select" onChange={(e) => handleChange(e, 'maritalStatus')}>
                                <option selected disabled value=""></option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                            </select>
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputPhone" className="form-label">Contact</label>
                            <input type="number" value={details.phone} className="form-control" id="inputPhone" onChange={(e) => handleChange(e, 'phone')} />
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputEmail" className="form-label">Email ID</label>
                            <input type="email" value={details.email} className="form-control" id="inputEmail" disabled readOnly/>
                        </div>
                        <div className="text-start col-md-8">
                            <label for="inputmgrName" className="form-label">Manager Name</label>
                            <input type="text" value={details.mgrName} className="form-control" id="inputmgrName" disabled readOnly/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-outline-success me-2">Update</button>
                            <button className="btn btn-outline-danger" onClick={()=>navigate("/empHome")}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
