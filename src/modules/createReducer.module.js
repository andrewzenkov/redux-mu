const produce = require("immer");

function createReducer(object, initialState) {
  const objectHandlers = {};

  Object.keys(object).forEach((key) => {
    objectHandlers[key] = (state, payload) =>
      produce(state, (draftState) => {
        object[key](draftState, payload);
      });
  });

  return function (state = initialState, action) {
    const { type, payload = {} } = action;

    if (objectHandlers[type]) {
      return objectHandlers[type](state, payload);
    } else {
      return state;
    }
  };
}

module.exports = {
  createReducer,
};
