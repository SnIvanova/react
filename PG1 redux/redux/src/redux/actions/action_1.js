import * as actionTypes from './actionTypes';

export const addToFavourite = (payload) => ({
  type: actionTypes.ADD_TO_FAVOURITE,
  payload,
});

export const removeFromFavourite = (payload) => ({
  type: actionTypes.REMOVE_FROM_FAVOURITE,
  payload,
});