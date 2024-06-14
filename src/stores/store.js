import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pagodaProbeApi } from "../services/pagodaProbeApi";
import { reducer as modalReducer } from "../slices/modalSlice"; // Import the modalSlice reducer

// https://redux-toolkit.js.org/rtk-query/overview
export const store = configureStore({
    // Add the generated reducer as a specific top-level slice
    reducer: {
        [pagodaProbeApi.reducerPath]: pagodaProbeApi.reducer,
        modal: modalReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pagodaProbeApi.middleware),
});
  
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);