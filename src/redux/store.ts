import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";

export interface MainFormParams {
  RealEstate: string;
  location: string;
  pricMax: string;
  pricMin: string;
  rooms: string;
}

const initialState = {
  mainForm: {
    RealEstate: "",
    location: "",
    pricMax: "",
    pricMin: "",
    rooms: "",
  } as MainFormParams,
};

const myObjectReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'mainFormSearch':
      return {
        ...state,
        mainForm: action.payload,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    mainForm: myObjectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
