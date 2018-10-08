import { GET_PROPERTY_DATA, ADDED_TO_FAVES } from '../constants/property.constants';

const initialState = {
  title: 'property details',
  price: 'property price',
  image: 'property image',
  summary: 'property summary',
  bedrooms: 0,
  bathrooms: 0,
  isAddedToFaves: false
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_PROPERTY_DATA:
    return {
      ...state,
      title: action.payload.title,
      price: action.payload.price_formatted || action.payload.price,
      image: action.payload.img_url || action.payload.image,
      summary: action.payload.summary,
      bedrooms: action.payload.bedroom_number || action.payload.bedrooms,
      bathrooms: action.payload.bathroom_number || action.payload.bathrooms
    };

  case ADDED_TO_FAVES:
    return {
      ...state,
      isAddedToFaves: action.payload
    };

  default: return state;
  }
};
