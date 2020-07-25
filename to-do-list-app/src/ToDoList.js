import React, { Component } from 'react'; // imrc is the shortcut...
import './ToDoList.css'; // make a CSS file for this component...

class ToDoList extends Component {
  // static defaultProps = {
  //   key: value,
  // }
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // ToDoList() {
  //   this.setState({ key: value });
  // }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
      return (
      <div className="ToDoList">
        {/* <h1>{this.state.ToDoList}</h1>
        <h1>{this.props.ToDoList}</h1> */}
        <h1>This is the ToDoList component...</h1>
      </div>
    );
  }
}

export default ToDoList; /// connect this component to App.js...
