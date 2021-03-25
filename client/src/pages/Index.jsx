// import {Fragment} from 'react'
// export default function Index() {
//   return (<Fragment>
//     <div className="container">
//       <center><h1 className="adminTitle montfont">Index Page</h1>
//     </center>
//     </div>
//   </Fragment>)
// }
import {Fragment} from "react";
import './style.css'
// import logo from "../assets/logo192.png";
export default function Index() {
  return (<Fragment>
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <div className="col-auto navbar-brand d-flex flex-column align-items-center ind-mt">
          {/* <img width="192" src={logo} alt="Logo" /> */}
          <h1 className=" pmfont">Welcome to</h1>
          <h1 className="display-1 pmfont">Report-S !</h1>
        </div>
      </div>
      <div className="row justify-content-center align-items-center margin-top montfont">
        <a className="btn btn-secondary col-2 btn-lg" href="/login">
          <i className="fas fa-sign-in-alt"></i>
          {" "}
          Login
        </a>
        <a className="btn btn-outline-secondary col-2 offset-md-1 btn-lg text-light" href="/register">
          <i className="fas fa-plus-square"></i>
          {" "}
          Register
        </a>
      </div>
    </div>
  </Fragment>);
}
