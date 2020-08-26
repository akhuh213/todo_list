import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'



class MyList extends Component {

  constructor(props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: " ",

    }
  }
  clearList(e) {
    console.log("clearing List!")
    this.setState({
      toDoItemArray: []
    })
  }
  newItemChange(e) {
    console.log("new item change")
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault()
    console.log("add item")
    const newArray = this.state.toDoItemArray;
    newArray.push(this.state.newItem);
    this.setState({
      toDoItemArray: newArray,
      newItem: ''
    })
    console.log(this.state)

  }

  render() {

    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))

    return (
      <div className="MyList">
        <h1> Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
 
        <form>
          <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)} >Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
