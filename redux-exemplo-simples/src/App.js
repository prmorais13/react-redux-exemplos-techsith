import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    idade: 21
  };

  onAumentar = () => {
    this.setState({
      ...this.state,
      idade: ++this.state.idade
    });
  };
  onDiminuir = () => {
    this.setState({
      ...this.state,
      idade: --this.state.idade
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          Idade: <span>{this.state.idade}</span>
        </div>
        <button onClick={this.onAumentar}>Aumentar</button>
        <button onClick={this.onAumentar}>Diminuir</button>
      </div>
    );
  }
}

export default App;
