import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import { robots } from '../Friends';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots:robots,
      searchfield:''
    }
  }

  //componentDidMount() {
    //fetch('https://jsonplaceholder.typicode.com/users')
    //.then(response => response.json())
    //.then(users => {this.setState({ robots: users})});
  //}

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(robots.length === 0)//or you can write (!robots.length)
    {
      return <h1 className='tc'>LOADING...</h1>
    }
    else {
      return(
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1><hr/>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filterRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
