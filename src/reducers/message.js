import * as Types from './../constants/ActionsType';

var initialState = Types.WELCOME;
const message = (state = initialState, action) => {
  switch(action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message
    default: return state;
  }
}

export default message;
