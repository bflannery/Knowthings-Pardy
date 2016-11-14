import React from 'react';
import {Router, Route, hashHistory } from 'react-router';

import GameBoardPage from './Components/GameBoardPage';

const router = (

    <Router history={hashHistory}>
      <Route path="/" component={GameBoardPage}/>
    </Router>

);

export default router;
