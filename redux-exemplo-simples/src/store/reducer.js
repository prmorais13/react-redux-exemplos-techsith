const initialState = {
  idade: 20,
  historico: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IDADE_AUMENTAR':
      //newState.idade += action.value;
      return {
        ...state,
        idade: state.idade + action.value,
        historico: state.historico.concat({
          id: Math.random(),
          idade: state.idade + action.value
        })
      };

    case 'IDADE_DIMINUIR':
      return {
        ...state,
        idade: state.idade - action.value,
        historico: state.historico.concat({
          id: Math.random(),
          idade: state.idade - action.value
        })
      };

    case 'IDADE_EXCLUIR':
      return {
        ...state,
        historico: state.historico.filter(el => el.id !== action.key)
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
