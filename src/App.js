import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Genres from './Genres';
import NewGenre from './NewGenre';
import EditGenre from './EditGenre';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/genres' exact component={Genres} />
        <Route path='/genres/new' exact component={NewGenre} />
        <Route path='/genres/:id' exact component={EditGenre} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
