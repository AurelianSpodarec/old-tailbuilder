import { configureStore } from '@reduxjs/toolkit';
import codeEditorReduer from './features/codeEditor/codeEditorSlice';
import propertiesPanelReducer from './features/propertiesPanel/propertiesPanelSlice';
import pagesReducer from './features/pages/pagesSlice';
import navigationReducer from './features/navigation/navigationSlice';
import pageLayerReducer from './features/pageLayer/pageLayerSlice';
import siteCanvasReducer from './features/siteCanvas/siteCanvas';
import modalsSliceReducer from './features/modals/modalSlice';
import workspaceReducer from './features/workspace/workspaceSlice';
import dragDropReducer from './features/dragDrop/dragDropSlice';

export const store = configureStore({
    reducer: {
        codeEditor: codeEditorReduer,
        propertiesPanel: propertiesPanelReducer,
        pages: pagesReducer,
        navigation: navigationReducer,
        pageLayer: pageLayerReducer,
        siteCanvas: siteCanvasReducer,
        modals: modalsSliceReducer,
        workspace: workspaceReducer,
        dragDrop: dragDropReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch