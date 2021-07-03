import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Components/User';
import Weather from './Components/Weather';
import Input from './Components/input';
import Label from './Components/Label';
import Form from './Components/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/User">
          <User />
        </Route>
        <Route path="/Weather">
          {<Weather />}
        </Route>
        <Route path="/Form">
          {<Form/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
