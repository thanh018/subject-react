import * as Types from './../constants/ActionsType';

var data = JSON.parse(localStorage.getItem('table'));
var initialState = data ? data : [];

const table = (state = initialState, action) => {
  var { subject, quantity } = action;
  var index = -1;
  switch(action.type) {
    case Types.ADD_TABLE:
      index = isExist(state, subject);

      if(index === -1) {
        state.push({
          subject, quantity
        });
      }
      else {
        state[index].quantity += quantity;
      }

      localStorage.setItem('table', JSON.stringify(state));
      return state;

    default: return [...state];
  }
}

var isExist = (table, subject) => {
  var index = -1;
  if(table.length > 0) {
    for(var i = 0; i < table.length; i++) {
      if(table[i].subject.id === subject.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}

export default table;
