import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './layouts/Nav'
import Index from './pages/Index.jsx'
import {Login, Register, Report} from './pages/'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Report} path="/report" />
        <Route path="/report">
          <Nav />
          <Report />
        </Route>
        <Route component={Register} path="/register" />
        <Route component={Login} path="/login" />
        <Route component={Index} path="/" />
      </Switch>
    </ BrowserRouter>
  );
}

export default App;
