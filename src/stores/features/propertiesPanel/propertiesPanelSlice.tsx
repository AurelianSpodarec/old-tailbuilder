import { createSlice } from "@reduxjs/toolkit";


export interface PropertiesPanelStateInterface {
    classes: any;
    isOpen: boolean;
}

const initialState: PropertiesPanelStateInterface = {
    classes: [],
    isOpen: false,
}


export const propertiespanelSlice = createSlice({
    name: 'propertiesPanel',
    initialState,
    reducers: {
        togglePropertiesPanel: (state) => {
            state.isOpen = !state.isOpen
        },
        openPropertiesPanel: (state) => {
            // console.log("dsds",state)
            state.isOpen = true
        },
        closePropertiesPanel: (state) => {
            // console.log(state)
            state.isOpen = false
        }
    }

});

export const { togglePropertiesPanel, openPropertiesPanel, closePropertiesPanel } = propertiespanelSlice.actions;

export default propertiespanelSlice.reducer;