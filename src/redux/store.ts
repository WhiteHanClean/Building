import { configureStore } from '@reduxjs/toolkit';
import libraryPhukeReducer from './libraryPhukeSlice';

const store = configureStore({
    reducer: {
        libraryPhuket: libraryPhukeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;