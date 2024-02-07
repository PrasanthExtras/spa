import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../components/Home/HomeSlice";

export const store = configureStore({
    reducer : {
        details : HomeSlice
    }
})

