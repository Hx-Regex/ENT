import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './style.css'
import Home from './views/home'
import Login from './views/login'
import Hire from './components/Hire'
import WorkerDetails from './components/WorkerDetails'
import Joinus from './components/Joinus'
const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Hire} exact path="/hire" />
        <Route component={WorkerDetails} exact path="/hire/:workerId"  />
        <Route component={Joinus} exact path="/joinus" />
        

      
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
