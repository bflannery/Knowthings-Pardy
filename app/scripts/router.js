import React from 'react';
import {Router, Route, hashHistory } from 'react-router';


//Import Collections
import categories from './Collections/categories';
//Import Models
import category from './Models/category';
//Import Components
import GameBoardPage from './Components/GameBoardPage';
import GameBoard from './Components/GameBoard';


const router = (
    <Router history={hashHistory}>
      <Route path="/" component={GameBoardPage}/>
    </Router>

);

export default router;
