const produce = require("immer");

function createAction({ prefix = "" } = {}) {
  function _actionCreator(type = "", callback = (...args) => args) {
    const actionType = prefix ? `${prefix}--${type}` : type;

    function actionCreator() {
      const action = { type: actionType, payload: callback(payload) };

      return action;
    }

    actionCreator.toString = function () {
      return actionType;
    };

    return actionCreator;
  }

  return _actionCreator;
}

module.exports = {
  createAction,
};
