import React from 'react';
import ReactDom from 'react-dom';
import router from './router';

let gameContainer = document.getElementById('game-container');

ReactDom.render(router, gameContainer);
