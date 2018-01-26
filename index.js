/**
 * The logger middleware for redux-zero
 * @param config
 * @returns {function(*): function(*): function(*=)}
 */
function logger(config = {}) {
  // return an middleware
  return state => next => action => {
    const prevState = store.getState();
    const r = next(action);

    function prinf(prev, action, next) {
      console.group(action, "@" + new Date().toISOString());
      console.log("%cprev state", "color:#9E9E9E", prev);
      console.log("%caction", "color:#2196F3", action);
      console.log("%cnext state", "color:#4CAF50", next);
      console.groupEnd();
    }

    if (r && typeof r.then === "function") {
      return next(action).then(
        d =>
          prinf(prevState, action.name, store.getState()) && Promise.resolve(d)
      );
    } else {
      prinf(prevState, action.name, store.getState());
      return r;
    }
  };
}

module.exports = logger;
