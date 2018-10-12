import * as Types from './../constants/ActionsType';

export const actAddToTable = (subject, quantity) => {
  return {
    type: Types.ADD_TABLE,
    subject,
    quantity
  }
}

export const actDeleteTable = (subject) => {
  return {
    type: Types.DELETE_TABLE,
    subject
  }
}

export const actUpdateTable = (subject, quantity) => {
  return {
    type: Types.UPDATE_TABLE,
    subject,
    quantity
  }
}

export const actMessage = (message) => {
  return {
    type: Types.CHANGE_MESSAGE,
    message
  }
}
