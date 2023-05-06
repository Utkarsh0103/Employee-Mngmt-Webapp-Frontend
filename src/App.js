import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import UserRegtr from './Pages/Admin/UserRegtr';
import AdminPage from './Pages/Admin/AdminPage';
import EmployeeHome from './Pages/Employee/EmployeeHome';
import EmpProfile from './Pages/Employee/EmpProfile';
import AddTasks from './Pages/Manager/AddTasks';
import AssigningTask from './Pages/Manager/AssigningTask';
import LeavesReq from './Pages/Manager/LeavesReq';
import LeaveStatusUpd from './Pages/Manager/LeaveStatusUpd';
import ManagerHome from './Pages/Manager/ManagerHome';
import MgrEmployees from './Pages/Manager/MgrEmployees';
import TasksAssgnMgr from './Pages/Manager/TasksAssgnMgr';
import AddLeave from './Pages/Employee/AddLeave';
import EmpLeaves from './Pages/Employee/EmpLeaves';
import TasksAssignEmp from './Pages/Employee/TasksAssignEmp';
import TaskProgUpd from './Pages/Employee/TaskProgUpd';
import Master from './Components/Master';
import { Scrollbars } from 'react-custom-scrollbars-2'
import LoginPage from './Pages/LoginPage';

function App() {
  return (

    <div className="App">
      <Router>
        <Master>
          <Scrollbars style={{ width: 1280, height: 545 }}>
            <Routes>
              <Route exact path='/' element={<HomePage key="home"/>} />
              <Route exact path='loginPage' element={<LoginPage key="login"/>} />
              <Route exact path='admin' element={<AdminPage key="adminpage" />} />
              <Route exact path='adduser' element={<UserRegtr key="useradd" />} />
              <Route exact path='empHome' element={<EmployeeHome key="emphome"/>} />
              <Route exact path="empProfile" element={<EmpProfile key="empProf" />} />
              <Route exact path="addTasks/:id" element={<AddTasks key="addTasks" />} />
              <Route exact path="assigningTask" element={<AssigningTask key="assigntask" />} />
              <Route exact path="mgrHome" element={<ManagerHome key="mgrhome" />} />
              <Route exact path="leavesReq" element={<LeavesReq  key="leaveReq"/>} />
              <Route exact path='leaveStatusUpd/:id' element={<LeaveStatusUpd key="lvstsUpd" />} />
              <Route exact path="mgr_Employees" element={<MgrEmployees key="mgrEmp" />} />
              <Route exact path="tasksAssgnMgr" element={<TasksAssgnMgr key="tskassgnMgr" />} />
              <Route exact path="addLeave" element={<AddLeave key="addlv" />} />
              <Route exact path="empLeaves" element={<EmpLeaves key="emplv" />} />
              <Route exact path="tasksAssignEmp" element={<TasksAssignEmp key="tskAssgnemp" />} />
              <Route exact path="taskProgUpd/:id" element={<TaskProgUpd key="tskprogupd" />} />
            </Routes>
          </Scrollbars>
        </Master>
      </Router>
    </div>

  );
}

export default App;
