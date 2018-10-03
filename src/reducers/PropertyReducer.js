import { GET_PROPERTY_DATA } from '../constants/property.constants';

const initialState = {
  title: 'property details',
  price: 'property price',
  image: 'property image',
  summary: 'property summary',
  bedrooms: 0,
  bathrooms: 0
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_PROPERTY_DATA:
    return {
      ...state,
      title: action.payload
    };

  default: return state;
  }
};
