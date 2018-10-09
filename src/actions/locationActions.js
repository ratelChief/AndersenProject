import { FETCH_LOCATIONS, FETCH_MY_LOCATION, SET_TO_INITIAL_STATE } from '../constants/location.constants';

export const fetchLocationAction = placeName => ({
  type: FETCH_LOCATIONS,
  request: fetch(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`)
});

export const fetchMyLocationAction = locationData => ({
  type: FETCH_MY_LOCATION,
  request:
 fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=${locationData.latitude},${locationData.longitude}`)
});

export const setToInitialState = () => ({
  type: SET_TO_INITIAL_STATE
});
