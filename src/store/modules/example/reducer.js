import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('estou fazendo sucesso');
      const newState = { ...state };
      //newState.botaoClicado = newState.botaoClicado ? false : true
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo a requisiçao');
      return state;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('estou falhando');
      return state;
    }

    default: {
      return state;
    }
  }
}
