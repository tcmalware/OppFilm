import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
