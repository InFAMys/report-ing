import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './pages/Index.jsx'
import {Login, Register, Report, Admin, Admindex} from './pages/'
function App() {
  return (<BrowserRouter>
    <Switch>
      <Route component={Admindex} path="/admindex"/>
      <Route component={Admin} path="/admin"/>
      <Route component={Report} path="/report"/>
      <Route component={Register} path="/register"/>
      <Route component={Login} path="/login"/>
      <Route component={Index} path="/"/>
    </Switch>
  </ BrowserRouter>);
}

export default App;
