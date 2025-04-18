import { configureStore } from "@reduxjs/toolkit";
import demo from "./actions/demo";
import checkout from "./actions/checkout";
import api from "./api";

export const store = configureStore({
    reducer: {
        demo,
        checkout,
        api: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});