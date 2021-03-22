import {Form, Input} from '../components/Form'
import {useState} from 'react'
import axios from 'axios'
export default function Register() {
  const [state, setState] = useState({email: '', password: '', username: '', telp: ''})

  const handleChange = (e) => {
    setState(state => ({...state, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/user', state).then(({data}) => console.log(data)).catch(err => console.log(err))
  }

  return (<div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="row w-100">
      <div className="shadow rounded col-md-6 mx-auto p-4">
        <Form title="Register Form" onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" type="email" onChange={handleChange}/>
          <Input name="password" placeholder="Password" type="password" onChange={handleChange}/>
          <Input name="username" placeholder="Username" type="text" onChange={handleChange}/>
          <Input name="telp" placeholder="Telephone" type="number" onChange={handleChange}/>
          <button type="submit" className="btn btn-danger">Submit</button>
        </Form>
      </div>
    </div>
  </div>)
}
