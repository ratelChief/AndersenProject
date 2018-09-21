export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export function getLocations() {
  return {
    type: FETCH_SUCCESS,
    payload: 200
  };
}

export const fetchLocation = () => {
  return dispatch => {
    fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds', { mode: 'cors' })
    .then(res => res.json())
    .then(locations => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: locations
      });
    });
  };
};
