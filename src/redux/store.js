import { configureStore } from "@reduxjs/toolkit";
import itemsSlices from "./slices";
import fetchStatusSlice from "./slices/fetching";
import bagSlice from "./slices/agSlices";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlices.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
