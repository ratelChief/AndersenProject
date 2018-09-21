export function addLike(like) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'ADD_LIKE',
        payload: like
      });
    }, 2000);
  };
}

export function removeLike(like) {
  return {
    type: 'REMOVE_LIKE',
    payload: like
  };
}
