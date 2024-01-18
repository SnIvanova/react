/* Riscrivi i tuoi action creator come abbiamo fatto in classe, scrivendoli in un file separato. Sostituisci ogni proprietà type scritta come semplice stringa con una costante. */

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  favourite: {
    list: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case actionTypes.REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
  