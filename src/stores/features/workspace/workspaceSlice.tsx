import { createSlice } from "@reduxjs/toolkit";
import { zoomOptions } from "config";


export interface PropertiesPanelStateInterface {
    isFooterOpen: boolean;
    zoomIndex: number;
}

const initialState: PropertiesPanelStateInterface = {
    isFooterOpen: false,
    zoomIndex: zoomOptions.indexOf(1)
}

export const workspaceSlice = createSlice({
    name: 'workspaceSlice',
    initialState,
    
    reducers: {
        toggleWorkspaceFooter: (state) => {
            state.isFooterOpen = !state.isFooterOpen
        },
        openWorkspaceFooter: (state) => {
            state.isFooterOpen = true
        },
        closeWorkspaceFooter: (state) => {
            state.isFooterOpen = false
        },
        onResetZoom: (state) => {
            state.zoomIndex = zoomOptions.indexOf(1)
        },
        onZoomOut: (state) => {
            console.log(state.zoomIndex)
            if(state.zoomIndex === 0) return
            state.zoomIndex =  state.zoomIndex - 1;
        },
        onZoomIn: (state) => {
            if(zoomOptions.length === state.zoomIndex) return
            state.zoomIndex = Math.min(state.zoomIndex + 1, zoomOptions.length - 1);
        },
        changeZoomValue: (state) => {

        }
    }

});

export const { toggleWorkspaceFooter, openWorkspaceFooter, closeWorkspaceFooter, onZoomOut, onZoomIn, onResetZoom } = workspaceSlice.actions;

export default workspaceSlice.reducer;



// const devices = {
//     // desktop+
//     // tablet
//     // "mobile"
//     "iPhone4": {
//         "name": "iPhone 4",
//         "brand": "Apple",
//         "os": "iOS",
//         "dimensions": {
//             "width": 320,
//             "height": 480,
//         }
//     },
//     "iPhoneSe": {
//         "name": "iPhone SE",
//         "dimensions": {
//             "width": 375,
//             "height": 667
//         }
//     }
// }