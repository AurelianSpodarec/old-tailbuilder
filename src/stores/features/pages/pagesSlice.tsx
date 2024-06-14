import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPages } from "../../../services/fakeApi/api/pages";

 
export const fetchPages = createAsyncThunk(
    'pages/fetchPages',
    async (pages, thunkAPI) => {
        const response = await getPages(pages)
        return response
    }
)

export interface PagesStateInterface {
    activePageID: number;
    pages: any;
}

const initialState: PagesStateInterface = {
    activePageID: 1,
    pages: null,
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePageID = action.payload
        },
        setPages: (state, action) => {
            state.pages = action.payload
        }
    },
    extraReducers: (pages) => { 
        pages.addCase(fetchPages.fulfilled, (state, action) => {
            state.pages = action.payload
        })
    }

});

export const { setActivePage, setPages } = pagesSlice.actions;

export default pagesSlice.reducer;