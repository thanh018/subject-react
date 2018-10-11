import * as Types from './../constants/ActionsType';

export const actAddToTable = (subject, quantity) => {
  return {
    type: Types.ADD_TABLE,
    subject,
    quantity
  }
}
