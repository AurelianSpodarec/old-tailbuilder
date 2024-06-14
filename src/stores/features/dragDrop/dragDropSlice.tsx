import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPages } from "../../../services/fakeApi/api/pages";

 
export interface ModalsStateInterface {
    isDragging: boolean;
    element: {},
    imageOffset: {},
    mouseCords: {},
    elementType: string,
}

const initialState: ModalsStateInterface = {
    isDragging: false,
    element: {},
    elementType: "", // section, element
    imageOffset: {
        offsetX: 0,
        offsetY: 0,
    },
    mouseCords: {},
}

export const dragDropSlice = createSlice({
    name: 'dragDrop',
    initialState,
    reducers: {
        setDragging: (state) => {
            state.isDragging = true
        },
        disableDragging: (state) => {
            state.isDragging = false
        },
        setElementData: (state, action) => {
            state.element = action.payload
        },
        setElementType: (state, action) => {
            state.elementType = action.payload
        },
        setImageOffset: (state, action) => {
            state.imageOffset = action.payload
        },
        setMousecords: (state, action) => {
            state.mouseCords = action.payload
        },
    }
});

export const {
    setDragging,
    disableDragging,
    setElementData,
    setElementType,
    setImageOffset,
    setMousecords
} = dragDropSlice.actions;

export default dragDropSlice.reducer;