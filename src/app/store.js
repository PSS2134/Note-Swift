import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "../noteslice";

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})