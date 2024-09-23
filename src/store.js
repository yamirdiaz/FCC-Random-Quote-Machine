import QuotesReducer from "./reducers-slices/Quotes/QuotesSlice";
import randomNumReducer from "./reducers-slices/randomNum/randomNumSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        quote: QuotesReducer,
        randomNum: randomNumReducer,
    },
})

export default store