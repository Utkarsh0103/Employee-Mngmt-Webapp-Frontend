import React from 'react'
import Profile from '../../Images/Profile-Icon.png'
import Task from '../../Images/Tasks.png'
import Leave from '../../Images/Leaves.png'
import { Link } from 'react-router-dom'

export default function EmployeeHome() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 p-4 mt-4">
                    <div className="card shadow">
                        <img style={{ width: 200, height: 200, marginLeft:65 }} alt="" src={Profile} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Your Profile</h5>
                            <p className="card-text"><i>View and update your profile here.<br/></i></p>
                            <br/>
                            <Link href="#" className="btn btn-outline-primary" to="/empProfile">My Profile</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 p-4 mt-4">
                    <div className="card shadow">
                        <img style={{ width: 190, height: 192, marginLeft:65, marginTop: 8 }} alt="" src={Task} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Tasks Management</h5>
                            <p className="card-text"><i>View tasks assigned to you and update the progress of tasks.</i></p>
                            <Link href="#" className="btn btn-outline-info" to="/tasksAssignEmp">View Tasks</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 p-4 mt-4">
                    <div className="card shadow">
                        <img style={{ width: 250, height: 199, marginLeft:50 }} alt="" src={Leave} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Leave Management</h5>
                            <p className="card-text"><i>Apply for leave and check your leave status here.</i></p>
                            <Link href="#" className="btn btn-outline-primary me-2" to="/addLeave">Apply for Leave</Link>
                            <Link href="#" className="btn btn-outline-info" to="/empLeaves">Leave Status</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
