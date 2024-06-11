import {createLogger} from 'redux-logger';
import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
// import * as toolkitRaw from '@reduxjs/toolkit';
// const { configureStore, MiddlewareArray } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;
import rootReducer from "../reducers/root.reducer";
import {persistReducer, persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage/session"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['signupReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();
const middleware: MiddlewareArray<any> = new MiddlewareArray();
if (import.meta.env.MODE !== 'prod')
    middleware.push(loggerMiddleware);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middleware)
});


const persiStore = persistStore(store);


export default { persiStore, store };
