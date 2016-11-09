import React from 'react';
import {Router, Route, hashHistory } from 'react-router';


//Import Collections
//Import Models
//Import Components
import GameBoardPage from './Components/GameBoardPage';


const router = (
    <Router history={hashHistory}>
      <Route path="/" component={GameBoardPage}/>
    </Router>

);

export default router;
