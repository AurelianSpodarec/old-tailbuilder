import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPages } from "../../../services/fakeApi/api/pages";

 
// export const fetchPages = createAsyncThunk(
//     'pages/fetchPages',
//     async (pages, thunkAPI) => {
//         const response = await getPages(pages)
//         return response
//     }
// )

export interface ModalsStateInterface {
    openModal: string;
}

const initialState: ModalsStateInterface = {
    openModal: "",
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openShortcutsModal: (state) => {
            if(state.openModal === "shortcuts") {
                state.openModal = "";
            } else {
                state.openModal = "shortcuts";
            }
        },
        closeModal: (state) => {
            state.openModal = ""
        },
    }
});

export const { 
    openShortcutsModal,
    closeModal
} = modalsSlice.actions;

export default modalsSlice.reducer;