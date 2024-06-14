

import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// export interface SiteCanvasStateInterface {
//     temporaryElement: {
//         dimensions: {};
//         properties: {};
//         classes: [];
//         content: string;
//     };
//     selectedElement: {
//         dimensions: {};
//         properties: {};
//         classes: [];
//         content: string;
//     };
//     frameHeight: number;
// }


// element: {
//     dimensions: width height etc..
//     properties: tag name etc.. 
//     classes of the element
//     content: text, src
// }

// Merge site canvas with properties panel
const initialState:any = {
    temporaryElement: {
        node: undefined,
        dimensions: {},
        properties: {},
        classes:[],
        content: "",
        element: undefined,
    },
    selectedElement: {
        node: undefined,
        dimensions: {},
        properties: {},
        classes:[],
        content: "",
    },
    nodeTree: {},
    frameHeight: 0
}


export const siteCanvasSlice = createSlice({
    name: 'siteCanvas',
    initialState,
    reducers: {
        setTemporaryNode: (state, action) => {
            console.log("store node",action.payload)
            state.temporaryElement.node = action.payload
        },
        setTemporaryDimensions: (state, action) => {
            state.temporaryElement.dimensions = {...action.payload.elementRect}
        },
        setTemporaryProperties: (state, action) => {
            state.temporaryElement.properties = action.payload
        },
        setTemporaryClasses: (state, action) => {
            state.temporaryElement.classes = action.payload
        },
        setTemporaryContent: (state, action) => {
            state.temporaryElement.content = action.payload
        },
        setTemporaryElement: (state, action) => {
            state.temporaryElement.element = action.payload
        },
        setNodeTree: (state, action) => {
            console.log("store",action.payload)
            state.nodeTree = action.payload
        },

        setSelectedElement: (state) => {
            state.selectedElement  = state.temporaryElement;
        },





        // setMouseoverElement: (state, action) => {
        //     state.temporaryElement.properties = {...action.payload.elementRect}
        // },
   
        setFrameHeight: (state, action) => {
            state.frameHeight = action.payload
        },
    }

});

export const { 
    // setMouseoverElement, 
    // setActiveElement, 
    // setTagName, 
    // setElementClasses, 
    // setContent,
    setFrameHeight,

    setTemporaryNode,
    setTemporaryDimensions,
    setTemporaryProperties,
    setTemporaryClasses,
    setTemporaryContent,
    setTemporaryElement,

    setSelectedElement,
    setNodeTree

} = siteCanvasSlice.actions;

export default siteCanvasSlice.reducer;