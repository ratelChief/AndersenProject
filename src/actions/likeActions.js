export function addLike(like) {
  return {
    type: 'ADD_LIKE',
    payload: like
  };
}

export function removeLike(like) {
  return {
    type: 'REMOVE_LIKE',
    payload: like
  };
}
