import { Link, useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../BackendConn/auth'


export default function Navbar() {

  const navigate = useNavigate()

  const dologOut = () => {
    localStorage.removeItem("data")
    navigate("/")
  }

  const doLogin = () => {
    navigate("/loginPage")
  }

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">EMS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="admin">AdminPage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="empHome">EmpHome</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="mgrHome">MgrHome</Link>
              </li>
            </ul> */}
            
              {isLoggedIn() ? <button className="btn btn-outline-light ms-auto" onClick={dologOut}>Logout</button> :
                <button className="btn btn-outline-light ms-auto" onClick={doLogin}>Login</button>}
          </div>
        </div>
      </nav>
    </div>


  )
}

