import { FETCH_REALTY_LIST } from '../constants/realty.constants';

export const fetchRealtyAction = value => ({
  type: FETCH_REALTY_LIST,
  request: fetch(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${value}`)
});
