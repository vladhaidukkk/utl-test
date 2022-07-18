import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { entitiesReducer } from './entities';

const rootReducer = combineReducers({
  entities: entitiesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
