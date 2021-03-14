import { combineReducers } from '@reduxjs/toolkit';
import { reducer as counterReducer } from 'src/redux/slices/counter';

const appReducer = combineReducers({
  counter: counterReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_WEBAPP') {
    state = undefined;
  }
  return appReducer(state, action);
}

export const resetAppAction = () => (dispatch) => {
  dispatch({ type: 'RESET_WEBAPP' });
};

export default rootReducer;
