import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Genres from './Genres';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Route path='/genres' component={Genres} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
