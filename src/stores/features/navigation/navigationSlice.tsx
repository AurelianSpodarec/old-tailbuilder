import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPages } from "services/fakeApi/api/pages";

 
// export const fetchPages = createAsyncThunk(
//     'pages/fetchPages',
//     async (pages, thunkAPI) => {
//         const response = await getPages(pages)
//         return response
//     }
// )

export interface NavigationStateInterface {
    activeNavigationID: number;
    openPage: string;
    isOpen: boolean;
    data: any;
}

const initialState: NavigationStateInterface = {
    activeNavigationID: 1,
    openPage: "add-elements",
    isOpen: false,
    data: null,
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        togglePagesMenu: (state) => {
            if(state.openPage === "pages") {
                state.openPage = "";
            } else {
                state.openPage = "pages";
            }
        },
        toggleAddElementsMenu: (state) => {
            if(state.openPage === "add-elements") {
                state.openPage = "";
            } else {
                state.openPage = "add-elements";
            }
        },
        setopenDrawer: (state, action) => {
            state.openPage = action.payload
        },
        setActiveNavigation: (state, action) => {
            state.activeNavigationID = action.payload
        },
        toggleNavigationMenu:(state, action) => {
            state.isOpen = !state.isOpen
            // action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        }
    }
});

export const { 
    setopenDrawer, 
    setActiveNavigation, 
    toggleNavigationMenu, 
    setData,
    togglePagesMenu,
    toggleAddElementsMenu
} = navigationSlice.actions;

export default navigationSlice.reducer;