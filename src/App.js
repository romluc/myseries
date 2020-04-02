import React from 'react';
import Header from './Header';
import Home from './Home';
import Genres from './Genres';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/genres' component={Genres} />
      </div>
    </Router>
  );
}

export default App;
