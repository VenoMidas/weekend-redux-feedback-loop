import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        <Route exact path='/' >
          <Home />
        </Route>

        <Route exact path='/feeling' >
          <Feeling />
        </Route>

        <Route exact path='/understanding' >
          <Understanding />
        </Route>

        <Route exact path='/supported' >
          <Supported />
        </Route>

        <Route exact path='/comments' >
          <Comments />
        </Route>

        <Route exact path='/review' >
          <Review />
        </Route>

      </Router>

    </div>
  );
};

export default App;