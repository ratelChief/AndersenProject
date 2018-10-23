export function saveToLocalStorage(constant, state, payload) {
  const stringifyData = JSON.stringify([
    ...state,
    payload
  ]);

  localStorage.setItem(constant, stringifyData);
}

export function getFromLocalStorage(constant) {
  return JSON.parse(localStorage.getItem(constant));
}

export function deleteFromLocalStorage(constant, state, payload) {
  const stringifyData = JSON.stringify([
    ...state.filter(todo => todo !== payload)
  ]);

  localStorage.setItem(constant, stringifyData);
}

export function setInitialStateOfLocalStorage(constant) {
  if (!localStorage.getItem(constant)) {
    localStorage[constant] = JSON.stringify([]);
  }
}
