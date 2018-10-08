import { GET_PROPERTY_DATA, ADDED_TO_FAVES } from '../constants/property.constants';

export const getPropertyData = data => ({
  type: GET_PROPERTY_DATA,
  payload: data
});

export const addedToFaves = toggle => ({
  type: ADDED_TO_FAVES,
  payload: toggle
});
