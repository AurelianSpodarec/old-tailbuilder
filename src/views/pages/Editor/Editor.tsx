import React, { useReducer, useState, useEffect, useRef } from "react";


import { FrameInfoProvider, useFrameInfo } from "context/FrameInfo";
 
import WorkspaceView from "./Workspace/WorkspaceView";
 

function Builder() {
 
    return (
        <div className="relative h-screen overflow-hidden">
        <div className="flex flex-col h-full overflow-hidden">
        <FrameInfoProvider>

            <div className="flex flex-row h-full overflow-hidden relative">
                <WorkspaceView />
            </div> 
        
        </FrameInfoProvider>
        </div>
        </div>
    );
}
    
 
export default React.memo(Builder);