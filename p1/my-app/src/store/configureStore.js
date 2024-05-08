import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux'; // Corrected import statement
import rootReducer from '../reducers';
import actionTypeLogger from '../middleware/actionTypeLogger';
import payloadLogger from '../middleware/payloadLogger';

const middleware = [actionTypeLogger, payloadLogger];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
});

export default store;
