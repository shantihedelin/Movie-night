import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rocketsSlice";
import launchesReducer from "./launchesSlice";

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    launches: launchesReducer,
  },
});
