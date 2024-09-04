import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slides/userSlide";
import counterReducer from "../redux/slides/counterSlide";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer
    },
})