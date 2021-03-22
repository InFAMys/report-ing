import {Form, Input} from '../components/Form'
export default function Login () {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="shadow rounded col-md-6 mx-auto p-4">
          <Form title="Login Form">
            <Input name="email" placeholder="Email" type="email"/>
            <Input name="password" placeholder="Password" type="password"/>
            <button type="submit" className="btn btn-danger">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  )
}
