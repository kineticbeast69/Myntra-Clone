import { configureStore } from "@reduxjs/toolkit";
import itemsSlices from "./slices";
export const store = configureStore({
  reducer: {
    items: itemsSlices.reducer,
  },
});
