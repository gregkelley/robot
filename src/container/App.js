import React, { Fragment, Component } from 'react';
//import React, { Component } from 'react';    <--destructuring
//import logo from './logo.svg';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// must put {} around robots to destructure since it does not contain a single 'thing'
//import {robots} from './robots';
import ErrorBoundary from '../components/ErrorBoundary';

// class App extends Component    <-- use with destructured import above
class App extends Component {   // can also use: React.Component if not pulling Component from import (line 1.)
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //   return response.json();
    // }).then(users => {
    //   this.setState({robots: users});
    // });

    // this doesn't fukin work. too many restrictions.
    //fetch('https://my-json-server.typicode.com/gregkelley/robotusers')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    // value is the search string returned by the search box
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if(this.state.robots.length === 0) {
      return( <h1>Loading...</h1> )
    } else {
      return (
        <Fragment>
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots} />
              </ErrorBoundary>
            </Scroll>
          </div>
        </Fragment>
      );
    }
  }
}

// original generated code. had to revert for udemy class.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
