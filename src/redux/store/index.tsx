import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer";

const store = configureStore({
  reducer: dataReducer,
  devTools: true,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof dataReducer>;
