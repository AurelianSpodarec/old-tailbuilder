import React from 'react';

import FooterView from './Footer';
import FrameView from './Frame';  

function WorkspaceView() {
    
    return (
        <div className="flex grow flex-col overflow-hidden relative h-full">
            {/* <div className={`flex ${editor.layout} grow`}> */}
            <div className="flex flex-col grow">
                <div className="flex flex-col grow h-full">
                    {/* <FrameView pages={pages} /> */}
                </div>      
                
                {/* <CodeEditorView editor={editor} pages={pages} /> */}
            </div>
            <FooterView />
        </div>
    );
}

export default WorkspaceView;