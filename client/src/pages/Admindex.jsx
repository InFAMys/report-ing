// import {Form, Input} from '../components/Form'
import {useState, useEffect} from 'react'
// import axios from 'axios'
import Nav from '../layouts/Nav.jsx'
import './style.css'

export default function Admindex() {
  const [state, setState] = useState({
    token: JSON.parse(sessionStorage.getItem('tokenAdmin'))
  })

  useEffect(() => {
    if (!state.token) {
      window.location = "/admin"
    }
  })

  return (<div>
    <Nav/>
    <center>
      <h1 className="adminTitle montfont">Admin Page</h1>
    </center>
  </div>)
}
