import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import CharacterDetail from '../containers/DetailContainer';


export default function App() {
  return (
  <Router>
    <h1>Avatar the Last Airbender</h1>
    <Switch>
      <Route exact path='/' component={HomeContainer}/>
      <Route path='/:name' component={CharacterDetail}/>
    </Switch>
  </Router>
  )
}
  