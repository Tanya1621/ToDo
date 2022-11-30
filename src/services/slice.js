import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    actions: [],
}

export const toDoSlice = createSlice( {
    name: 'todo',
    initialState,
    reducers: {
        initActions: (state, action) => {
            state.actions = [...action.payload]
        },
        addAction: (state, action) => {
            state.actions = [...state.actions, action.payload]
        },
        deleteAction: (state, action) => {
            state.actions = [...state.actions.filter(el => el._id !== action.payload._id)]
        },
        clearBoard: (state, action) => {
            state.actions = [...state.actions.filter(el => el.board !== action.payload)]
        }
    }
    }
)

export const {addAction, deleteAction, clearBoard, initActions} = toDoSlice.actions;
export default toDoSlice.reducer;