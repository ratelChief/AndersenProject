import * as constants from '../constants/location.constants';

export const fetchRealtyAction = placeName => ({
  type: constants.FETCH_LOCATIONS,
  request: fetch(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`)
});
