import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  // state = {
  //   idade: 21
  // };

  // onAumentar = () => {
  //   this.setState({
  //     ...this.state,
  //     idade: ++this.state.idade
  //   });
  // };
  // onDiminuir = () => {
  //   this.setState({
  //     ...this.state,
  //     idade: --this.state.idade
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div>
          Idade: <span>{this.props.idade}</span>
        </div>
        <button onClick={this.props.onAumentar}>Aumentar</button>
        <button onClick={this.props.onAumentar}>Diminuir</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    idade: state.idade
  };
};

const mapDispachToProps = dispach => {
  return {
    onAumentar: () => dispach({ type: 'IDADE_AUMENTAR' }),
    onDiminuir: () => dispach({ type: 'IDADE_DIMINUIR' })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
