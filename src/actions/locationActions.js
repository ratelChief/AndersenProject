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
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: FETCH_LOCATIONS,
        payload: users
      });
    });
  };
};
