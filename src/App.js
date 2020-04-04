import React from 'react';
import Header from './Header';
import Home from './Home';
import Genres from './Genres';
import NewGenre from './NewGenre';
import EditGenre from './EditGenre';
import Series from './Series';
import NewSeries from './NewSeries';
import InfoSeries from './InfoSeries';

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

          <Route path='/series' exact component={Series} />
          <Route path='/series/new' exact component={NewSeries} />
          <Route path='/series/:id' exact component={InfoSeries} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
