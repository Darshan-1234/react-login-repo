import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default is localStorage
import rootReducer from './reducers/rootReducer';  // your combined reducers

// Set up persist config
const persistConfig = {
    key: 'root',  // key for storing in local storage
    storage,      // use local storage to persist
    whitelist: ['auth']  // only persist the auth part of the state
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(
    persistedReducer,
    // Enable Redux DevTools Extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Persistor for rehydrating the state
const persistor = persistStore(store);

export { store, persistor };

