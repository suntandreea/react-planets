import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import {PlanetsProvider} from './context/PlanetsContext';
import AllPlanets from './pages/AllPlanets/AllPlanets';
import PlanetDetail from './pages/PlanetDetail/PlanetDetail';

function App() {
  return (
    <PlanetsProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AllPlanets} />
          <Route exact path='/planets' component={AllPlanets} />
          <Route exact path='/planets/:id' component={PlanetDetail} />
        </Switch>
      </BrowserRouter>
    </PlanetsProvider>
  );
}

export default App;
