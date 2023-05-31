import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { generalSlice } from "./general-slice";
import { createWrapper } from "next-redux-wrapper";
import { loadState } from "../app/browser-storage";
import { createStubSlice }  from "./create-stub-slice";


export const globalStore = configureStore({
  reducer: {
    [generalSlice.name]: generalSlice.reducer,
    [createStubSlice.name]: createStubSlice.reducer,
  },
  devTools: true,
  preloadedState: loadState()
});

const makeStore = () => globalStore
  
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
