import { GET_PROPERTY_DATA } from '../constants/property.constants';

export const getPropertyData = data => ({
  type: GET_PROPERTY_DATA,
  payload: data
});
