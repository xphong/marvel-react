import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import characters from './characters';
import powerlevels from './powerlevels';

const rootReducer = combineReducers({
  characters,
  powerlevels,
  routing: routerReducer
});

export default rootReducer;
