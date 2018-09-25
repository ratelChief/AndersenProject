export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_ERROR = 'FETCH_LOCATIONS_ERROR';

export const fetchLocationAction = placeName => ({
  type: FETCH_LOCATIONS,
  request: fetch(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`)
});
