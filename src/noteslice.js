import { createSlice} from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import {storeLocalStorage, fetchLocalStorage} from "./utils/localestorage";

const initialState = {
    notes: fetchLocalStorage('notes'),
    error: null,
    count: 0
}

const noteslice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNewNote(state, action){
            const {Title, Body} = action.payload;
            let Id = uuid().slice(0,9);
            let newPost = {Id, Title, Body};
            newPost.noteDate = new Date().toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              });
            state.notes.push(newPost);
            storeLocalStorage('notes', state.notes);
        },

        removeNote(state, action){
            const tempId = action.payload;
            const tempNotes = state.notes.filter(note => note.Id !== tempId);
            state.notes = tempNotes;
            storeLocalStorage('notes', tempNotes);
        },

        editNote(state, action){
            const {Id, Title, Body} = action.payload;
            const temp = state.notes.map(note => {
                if(note.Id === Id){
                    note.Title = Title;
                    note.Body = Body;
                    note.noteDate = new Date().toLocaleString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      });
                }
                return note;
            });

            state.notes = temp;
            storeLocalStorage('notes', temp);
        },

    
    }
});

export const { addNewNote, removeNote, editNote} = noteslice.actions;
export const getAllNotes = (state) => state.notes.notes;
export default noteslice.reducer;