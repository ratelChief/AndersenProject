import { GET_PROPERTY_DATA } from '../constants/property.constants';

const initialState = {
  title: 'property details',
  price: 'property price',
  image: 'property image',
  summary: 'property summary',
  bedrooms: 0,
  bathrooms: 0
};

export const propertyReducer = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
  case GET_PROPERTY_DATA:
    return {
      ...state,
      title: payload.title,
      price: payload.price_formatted || payload.price,
      image: payload.img_url || payload.image,
      summary: payload.summary,
      bedrooms: payload.bedroom_number || payload.bedrooms,
      bathrooms: payload.bathroom_number || payload.bathrooms
    };

  default: return state;
  }
};
