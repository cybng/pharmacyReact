import React from 'react'
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'
import Home from './component/home';
import Detail from "./component/detail/ProductDetail";
import Login from "./auth/Login";
export default function App() {
  return (
    <div>
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/detail" component={Detail} />
    <Route exact path="/login" component={Login} />
    </Switch>
    </Router>
      
    </div>
  )
}