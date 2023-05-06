import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { doLogIn } from '../BackendConn/auth';
import { loginUser } from '../BackendConn/helper';

export default function LoginPage() {
    let navigate = useNavigate();

    const [loginDetail, setLoginDetail] = useState({
        userName: "",
        passWord: ""
    })

    const handleChange = (event, property) => {
        setLoginDetail({ ...loginDetail, [property]: event.target.value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        //validation
        if (loginDetail.userName.trim() === '' || loginDetail.passWord.trim() === '') {
            alert("Username or Password is invalid !!")
        }

        loginUser(loginDetail).then((data) => {
            console.log(data)
            //save the data to localstorage
            doLogIn(data, () => {
                console.log("login data is saved in localstorage")
            })
            if (data.user.role === 'ADMIN') {
                navigate("/admin")
            }
            else if (data.user.role === 'EMPLOYEE') {
                navigate("/empHome")
            }
            else if (data.user.role === 'MANAGER') {
                navigate("/mgrHome")
            }

        }).catch(error => {
            console.log(error)
            alert("Invalid Username or Password !!")
        })
    }
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-4 offset-sm-4 rounded border p-4 mt-5 shadow">

                        <h2>LOGIN</h2>
                        <br />
                        <form onSubmit={handleFormSubmit}>
                            <div className="text-start mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="email" className="form-control" value={loginDetail.userName} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleChange(e, 'userName')} />
                            </div>
                            <div className="text-start mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" value={loginDetail.passWord} id="exampleInputPassword1" onChange={(e) => handleChange(e, 'passWord')} />
                            </div>
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button className="btn btn-danger" onClick={() => navigate("/")}>Back</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
