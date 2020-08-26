import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'

class MyList extends Component {
  render() {
    
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem doThis={item} key={'todo'+index}/>
      
    ))
    return (
      <div className="MyList">
        <h1> Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default MyList;
