import React from 'react';
import Header from './Header';
import Home from './Home';
import Genres from './Genres';
import NewGenre from './NewGenre';
import EditGenre from './EditGenre';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/genres' exact component={Genres} />
          <Route path='/genres/new' exact component={NewGenre} />
          <Route path='/genres/:id' exact component={EditGenre} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
