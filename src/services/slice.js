import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    actions: [],
}

export const toDoSlice = createSlice( {
    name: 'todo',
    initialState,
    reducers: {
        addAction: (state, action) => {
            state.actions = [...state.actions, action.payload]
        },
        deleteAction: (state, action) => {
            state.actions = [...state.actions.filter(el => el.id !== action.payload.id)]
        },
        clearBoard: (state, action) => {
            state.actions = [...state.actions.filter(el => el.board !== action.payload)]
        }
    }
    }
)

export const {addAction, deleteAction, clearBoard} = toDoSlice.actions;
export default toDoSlice.reducer;