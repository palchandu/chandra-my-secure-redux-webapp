import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';

const ENABLE_REDUX_DEV_TOOLS = true;

const encryptor = encryptTransform({
    secretKey: 'my-Super-Secret-key-jrtec-remote-inspections',
    onError: function (error) {
      // Handle the error.
    },
  })
  
  const persistConfig = {
    key: 'root',
    storage: storage,
    timeout: null,
    transforms: [encryptor] 
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: ENABLE_REDUX_DEV_TOOLS,
    middleware: [thunk]
});


export const persistor = persistStore(store);

