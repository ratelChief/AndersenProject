export const SWITCH_STATUS_ON_SUCCESS = 'SWITCH_STATUS_ON_SUCCESS';
export const SWITCH_STATUS_ON_ERROR = 'SWITCH_STATUS_ON_ERROR';
export const SWITCH_STATUS_DEFAULT = 'SWITCH_STATUS_DEFAULT';

export const toggleStatusOnSuccess = () => ({
    type: SWITCH_STATUS_ON_SUCCESS,
    payload: 'Please select a location below'
});

export const toggleStatusOnError = () => ({
  type: SWITCH_STATUS_ON_SUCCESS,
  payload: 'There was a problem with your search'
});

export const toggleStatusDefault = () => ({
  type: SWITCH_STATUS_DEFAULT,
  payload: 'Recent searches:'
});
