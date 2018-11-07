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
        <div className="header">
          <div className="age">
            Sua Idade: <span>{this.props.idade}</span>
          </div>
          <button className="ageUp" onClick={this.props.onAumentar}>
            Aumentar
          </button>
          <button className="ageDown" onClick={this.props.onDiminuir}>
            Diminuir
          </button>
          <hr />
          <div>Histórico</div>
          <div>
            <ul>
              {this.props.historico.map(el => (
                <li
                  key={el.id}
                  className="historicoItem"
                  onClick={() => this.props.onDelItem(el.id)}
                >
                  {el.idade}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    idade: state.idade,
    historico: state.historico
  };
};

const mapDispachToProps = dispach => {
  return {
    onAumentar: () => dispach({ type: 'IDADE_AUMENTAR', value: 10 }),
    onDiminuir: () => dispach({ type: 'IDADE_DIMINUIR', value: 5 }),
    onDelItem: id => dispach({ type: 'IDADE_EXCLUIR', key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
