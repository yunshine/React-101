import React, { Component } from 'react' // imrc is the shortcut...
import './Coin.css';

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.data.imgSrc} alt={this.props.data.side} />
      </div>
    );
  }
}

export default Coin;
