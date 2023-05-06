import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { myAxios } from '../../BackendConn/helper';

export default function UserRegtr() {
    let navigate = useNavigate();

    const [users, setUsers] = useState([])
    const [value, setValue] = useState(false)

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await myAxios.get("/admin/managers")
        setUsers(result.data);
    }

    const [data, setData] = useState({

        name: '',
        gender: '',
        birthDate: '',
        maritalStatus: '',
        role: '',
        phone: '',
        email: '',
        mgrName: '',
        pass: ''
    })


    useEffect(() => {
        console.log(data);
    }, [data])

    //handle change
    const handleChange = (event, property) => {
        const inputValue = event.target.value
        setData({ ...data, [property]: inputValue })
        if (property === 'role') {
            if (inputValue === 'MANAGER') {
                setValue(true)
            }
            else{
                setValue(false)
            }
        }
    }

    //submitting the form
    const submitForm = async (event) => {
        event.preventDefault()

        //validating data
        if(data.role === "MANAGER"){
            setData({ ...data, mgrName:" "})
        }

        //calling server api
        await myAxios.post("/admin/addUser", data)
        navigate("/admin")
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form className="row g-3" onSubmit={(e) => submitForm(e)} >
                        <div className="text-start col-md-8">
                            <label for="inputName" className="form-label">Name</label>
                            <input type="text" className="form-control" value={data.name} id="inputName" onChange={(e) => handleChange(e, 'name')} required />
                        </div>
                        <div className="text-start col-md-4">
                            <label for="inputGender" className="form-label">Gender</label>
                            <select id="inputGender" value={data.gender} className="form-select" onChange={(e) => handleChange(e, 'gender')} required>
                                <option selected disabled value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="text-start col-4">
                            <label for="inputBirthday" className="form-label">Birthday</label>
                            <input type="date" className="form-control" value={data.birthDate} id="inputBirthday" onChange={(e) => handleChange(e, 'birthDate')} required />
                        </div>
                        <div className="text-start col-md-5">
                            <label for="inputMarSts" className="form-label">Marital Status</label>
                            <select id="inputMarSts" value={data.maritalStatus} className="form-select" onChange={(e) => handleChange(e, 'maritalStatus')} required>
                                <option selected disabled value=""></option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                            </select>
                        </div>
                        <div className="text-start col-md-3">
                            <label for="inputRole" className="form-label">Role</label>
                            <select id="inputRole" value={data.role} className="form-select" onChange={(e) => handleChange(e, 'role')} required>
                                <option selected disabled value=""></option>
                                <option value="EMPLOYEE">Employee</option>
                                <option value="MANAGER">Manager</option>
                            </select>
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputPhone" className="form-label">Contact</label>
                            <input type="number" value={data.phone} className="form-control" id="inputPhone" onChange={(e) => handleChange(e, 'phone')} required />
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputEmail" className="form-label">Email ID</label>
                            <input type="email" value={data.email} className="form-control" id="inputEmail" onChange={(e) => handleChange(e, 'email')} required />
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputMgr" className="form-label">Manager Assigned</label>
                            <select id="inputMgr" value={data.mgrName} className="form-select" disabled={value} onChange={(e) => handleChange(e, 'mgrName')} required>
                                <option selected disabled value=""></option>
                                {
                                    users.map((user) => (
                                        <option>{user.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="text-start col-md-6">
                            <label for="inputPassword" className="form-label">Password</label>
                            <input type="password" value={data.pass} className="form-control" id="inputPassword" onChange={(e) => handleChange(e, 'pass')} required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button className="btn btn-danger" onClick={() => navigate("/admin")}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
