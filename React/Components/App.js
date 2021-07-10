import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Components/User';
import Weather from './Components/Weather';
import Input from './Components/input';

import Formvalid from './Components/Formvalid';
import Studparent from './Components/Studparent';
import CityApi from './Components/CityApi';

import {
  BrowserRouter as Router,
  Switch,
  Route
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
        <Route path="/Formvalid">
          {<Formvalid/>}
        </Route>
        <Route path="/Input">
          {<Input/>}
        </Route>
        <Route path="/Cityapi">
          <CityApi />
        </Route>
        <Route path="/Student">
          <Studparent/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
