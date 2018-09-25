export const FETCH_MY_LOCATION = 'FETCH_MY_LOCATION';
export const fetchMyLocationAction = locationData => ({
 type: FETCH_MY_LOCATION,
 request:
 fetch(`http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=51.684183,-3.431481`);
});
