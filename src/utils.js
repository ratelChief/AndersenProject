export function saveToLocalStorage(constant, state, payload) {
  const stringifyData = JSON.stringify([
    ...state,
    payload
  ]);

  localStorage.setItem(constant, stringifyData);
}

export function getFromLocalStorage(constant) {
  JSON.parse(localStorage.getItem(constant));
}
