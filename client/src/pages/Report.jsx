import {Form} from '../components/Form'
import {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import $ from 'jquery'
import Nav from '../layouts/Nav'
import './style.css'
export default function Login() {

  const [state, setState] = useState({
    content: "",
    status : "",
    id_user: JSON.parse(sessionStorage.getItem('id')),
    token: JSON.parse(sessionStorage.getItem('token'))
  })

    useEffect(() => {
      if(!state.token) {
        window.location ="/login"
      }
    }, [state.id_user])

  const handleChange = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    axios.post('http://localhost:6809/report', state).then(({data}) => {
      // window.location.assign('/report')
    }).catch(err => console.log(err))
    $('#entry-point').removeClass('d-none')
  }
  return (
    <Fragment>
      <Nav />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100">
          <div className="shadow rounded col-md-6 mx-auto p-4 bg-dark text-light">
            <Form title="Complaint Form" onSubmit={handleSubmit}>
              <textarea className="form-control" name="content" placeholder="Write Your Complaint Here" onChange={handleChange}></textarea>
              <button type="submit" className="btn btn-secondary repBtn">Submit</button>
              <div id="entry-point" className="d-none text-success">Success</div>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
