const initialState = {
  idade: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'IDADE_AUMENTAR':
      newState.idade++;
      break;

    case 'IDADE_DIMINUIR':
      newState.idade--;
      break;

    default:
      break;
  }

  return newState;
};

export default reducer;
