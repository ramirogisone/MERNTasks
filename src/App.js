import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Route>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        <Route exact path='/proyectos' component={Proyectos} />
      </Switch>
    </Route>
  );
}
export default App;
