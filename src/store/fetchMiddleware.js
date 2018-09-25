const fetchMiddleware = store =>  next => action => {
  if (action.request) {
    console.log(action.request);
    action.request
    .then(data => data.json())
    .then(response => next({ type: `${action.type}_SUCCESS`, payload: response }))
    .catch(err => {
      next({ type: `${action.type}_ERROR`, payload: err });
    });
  } else {
    next(action);
  }
};

export default fetchMiddleware;
