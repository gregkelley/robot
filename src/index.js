//import React, { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';  // assumes .js extention.
//import Hello from './Hello';
//import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello greeting='Welcome to my nightmare' />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
  // <Fragment>
  //   <CardList robots={robots} />
  // </Fragment>
  //   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
