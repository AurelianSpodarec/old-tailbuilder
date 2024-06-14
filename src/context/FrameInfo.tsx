import React, { createContext, useContext, useEffect, useState } from 'react';

const FrameInfoContext = createContext(undefined);

interface TemporaryElement {
    node: undefined,
    dimensions: {},
    properties: {},
    classes:[],
    content: "",
}

function FrameInfoProvider({ children }:any) {
    const [treeDOM, setTreeDOM] = useState(undefined);

    // TODO: Changename to: temporaryNodeElement and selectedNodeElement
    const [temporaryElement, setTemporaryElement] = useState(undefined,);
    const [selectedElement, setSelectedElement] = useState(undefined);
    const [selectedNodeTree, setSelectedNodeTree] = useState([]);

    function setSelectedElementFromTemporary() { 
        setSelectedElement(temporaryElement)
    }

    // Wrap value in memo to avoid unecessary re-renders
    const value = {
        treeDOM, setTreeDOM, 
        temporaryElement, setTemporaryElement,
        selectedElement, setSelectedElement, setSelectedElementFromTemporary,
        selectedNodeTree, setSelectedNodeTree,
    }
    return (// @ts-ignore: Unreachable code error
        <FrameInfoContext.Provider value={value}>{children}</FrameInfoContext.Provider>
    )
}

function useFrameInfo() {
    const context = useContext(FrameInfoContext)

    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
      }
      return context
}

export {
    FrameInfoProvider, 
    useFrameInfo
}