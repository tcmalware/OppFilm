import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from '../pages/Menuv2';
import Login from '../pages/Login';
import Register from '../pages/Register';
import cambiar from '../pages/Cambiarcl';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/cambiar_clave" component={cambiar}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
