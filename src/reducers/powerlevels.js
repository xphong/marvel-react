import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false,
  isFetched: false
};

export default function powerlevelsReducer(state = INITIAL_STATE, action = null) {
  switch(action.type) {
    case types.RECEIVE_POWERLEVELS_ERROR:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: true});
    case types.RECEIVE_POWERLEVELS:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: false, isFetched: true });
    case types.RECEIVE_POWERLEVELS_ERROR:
      return Object.assign({}, state, {isLoading: true, error: false });
    default:
      return state;
  }
}
