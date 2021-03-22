import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Index} path="/" />
      </Switch>
    </ BrowserRouter>
  );
}

export default App;
