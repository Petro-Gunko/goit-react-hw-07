import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contactsSlice";
import { filterReducer } from '../redux/filtersSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const ContactPersistConfig = {
    key: 'contactsArray',
    storage,
    whiteList: ['name']
};

const pContactsReducer = persistReducer(ContactPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: pContactsReducer,
        filters: filterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);