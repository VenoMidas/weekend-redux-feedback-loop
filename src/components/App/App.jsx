import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import Container from '@mui/material/Container';

function App() {

  return (
    <Container className='App'>

      <Router>

        <Header />

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

        <Route exact path='/success'>
          <Success />
        </Route>

        <Route exact path='/admin'>
          <Admin />
        </Route>

      </Router>

    </Container>
  );
};

export default App;