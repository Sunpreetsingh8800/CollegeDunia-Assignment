import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {createStore, combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const appReducers = combineReducers({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1, // see "Merge Process" section for details.
  // blacklist: [], // TODO: for Blacklist
};

const pReducer = persistReducer(persistConfig, appReducers);

export const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
