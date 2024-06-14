import { createSlice } from "@reduxjs/toolkit";


export interface EditorStateInterface {
    layout: string;
    isOpen: boolean;
    isFullScreen: boolean;
}

const initialState: EditorStateInterface = {
    layout: "flex-col",
    isOpen: false,
    isFullScreen: false
}

// const codeEditorOptions = {
//     "left": "flex-row-reverse",
//     "bottom": "flex-col",
//     "right": "flex-row"
// }

export const codeEditorSlice = createSlice({
    name: 'codeEditor',
    initialState,
    reducers: {
        left: (state) => {
            state.layout = "flex-row-reverse";
        },
        bottom: (state) => {
            state.layout = "flex-col";
        },
        right: (state) => {
            state.layout = "flex-row";
        },
        toggleEditor: (state) => {
            state.isOpen = !state.isOpen;
        },
        openEditor: (state) => {
            state.isOpen = true;
        },
        closeEditor: (state) => {
            state.isOpen = false
            state.isFullScreen = false
        },
        setEditorFullScreen: (state) => {
            state.isFullScreen = true
        },
        setCode: (state) => {
            
        }
    }

});

export const { left, bottom, right, openEditor, closeEditor, toggleEditor, setEditorFullScreen } = codeEditorSlice.actions;

export default codeEditorSlice.reducer;