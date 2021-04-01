import {useState, useEffect} from 'react'
// import axios from 'axios'
import './style.css'

export default function Admindex() {
  const [state] = useState({
    token: JSON.parse(sessionStorage.getItem("tokenAdmin"))
  });

  useEffect(() => {
    if (!state.token) {
      window.location = "/admin"
    }
  });

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.assign("/");
  };

  return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark text-light montfont">
      <div className="navbar-brand navbar-brand d-flex flex-row align-items-center">
        <h3 className="margin-leftlarger-font-size pmfont">Report-S</h3>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <a className="btn btn-transparent text-light" href="/admindex">
              <i className="fas fa-home montfont"></i>{" "}
              Home</a>
            <a className="btn btn-transparent text-light" href="/reportindexadmin">
              <i className="fas fa-list montfont"></i>{" "}
              Complaint List</a>
            <a className="btn btn-transparent text-light" href="/ongoing">
              <i className="fas fa-spinner montfont"></i>{" "}
              In Progress</a>
            <a className="btn btn-transparent text-light" href="/history">
              <i className="fas fa-history montfont"></i>{" "}
              Complaint History</a>
          </li>
          <li className="nav-item ml-auto">
            <button className="btn btn-transparent text-light" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt montfont"></i>
              {" "}
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <center>
      <h1 className="adminTitle montfont">Admin Page</h1>
    </center>
    
  </div>)
}
