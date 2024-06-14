import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 
export interface PageLayerStateInterface {
    activeLayerIndex: number;
    layers: any;
}

const initialState: PageLayerStateInterface = {
    activeLayerIndex: 1,
    layers: {},
}

export const pageLayer = createSlice({
    name: 'pageLayer',
    initialState,
    reducers: {
        setPageLayers: (state, action) => {
            // console.log("store", action.payload)
            state.layers = action.payload
        },
    }

});

export const { setPageLayers } = pageLayer.actions;

export default pageLayer.reducer;