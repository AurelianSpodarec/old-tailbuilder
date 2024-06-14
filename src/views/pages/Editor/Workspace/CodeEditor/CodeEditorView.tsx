
import React from "react";
import { useDispatch } from "react-redux";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools"

import { closeEditor } from 'stores/features/codeEditor/codeEditorSlice';
import { left, bottom, right, setEditorFullScreen} from 'stores/features/codeEditor/codeEditorSlice';

import { html2json } from "utility/htmlSerialization";

// TODO:
// Add Inspect: Shows height/width of the element, how far from the frame window, show ruler, show spacing/margin 
function CodeEditorView(props: any) {
    const { editor, pages } = props;
    // console.log("Code Editor")
    // console.log(pages.pages.data.pages[0])
    const dispatch = useDispatch();
    function jsxToHTML (jsx: string) {
        let html = jsx.replaceAll("className=", "class=").replaceAll('"', '\\"').replaceAll('href=', 'href="javascript:void(0)"');
        // console.log(html)
        return html;
    }

    function jsonToHTML (htmlCode: string) {
        const html = htmlCode.replaceAll('\\"', '"');
        return html;
    }

 
    function buildJSONfromHTML(...htmlFiles: any) {
        let string = "";

        let html = htmlFiles.forEach((item: any) => string += item);
        string = jsonToHTML(jsxToHTML(string))

        return string;
    }   
    return (
        <>
        <div className={` ${editor.isOpen ? "" : "hidden"} ${editor.isFullScreen ? "absolute" : "relative"} flex flex-col h-full w-full  bg-[#20211c]`}>

            <div className="flex justify-between items-center bg-[#20211c] px-6">

                <div>
                    <button className="flex items-center fill-white text-yellow-300 text-sm space-x-1 border-b border-yellow-300 px-2 py-2">
                        <div className="w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                        </div>
                        <span>home.html</span>
                    </button>
                </div>

                <div className="flex items-center">
                {/* position: fixed;
                width: 100%;
                left: 0;
                top: 0;
                bottom: 0;
                height: 100%;
                extra full screen code editor */}
                    <button className="text-gray-50" onClick={() => dispatch(setEditorFullScreen())}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    </button>

                    <button className="text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>

                    <div className="flex items-center">
                        <button className="text-gray-50" onClick={() => dispatch(left())}>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M16.5 18C16.2239 18 16 17.7761 16 17.5V2.5C16 2.22386 16.2239 2 16.5 2C16.7761 2 17 2.22386 17 2.5V17.5C17 17.7761 16.7761 18 16.5 18Z" fill="currentColor"></path><path d="M10 4C8.89543 4 8 4.89543 8 6V14C8 15.1046 8.89543 16 10 16H12C13.1046 16 14 15.1046 14 14V6C14 4.89543 13.1046 4 12 4H10ZM9 6C9 5.44772 9.44772 5 10 5H12C12.5523 5 13 5.44772 13 6V14C13 14.5523 12.5523 15 12 15H10C9.44772 15 9 14.5523 9 14V6Z" fill="currentColor"></path></svg>
                        </button>
                        <button className="text-gray-50" onClick={() => dispatch(bottom())}>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M2 3.5C2 3.22386 2.22386 3 2.5 3H17.5C17.7761 3 18 3.22386 18 3.5C18 3.77614 17.7761 4 17.5 4H2.5C2.22386 4 2 3.77614 2 3.5Z" fill="currentColor"></path><path d="M6 6C4.89543 6 4 6.89543 4 8V10C4 11.1046 4.89543 12 6 12H14C15.1046 12 16 11.1046 16 10V8C16 6.89543 15.1046 6 14 6H6ZM5 8C5 7.44772 5.44772 7 6 7H14C14.5523 7 15 7.44772 15 8V10C15 10.5523 14.5523 11 14 11H6C5.44772 11 5 10.5523 5 10V8Z" fill="currentColor"></path></svg>
                        </button>
                        <button className="text-gray-50" onClick={() => dispatch(right())}>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M3.5 18C3.22386 18 3 17.7761 3 17.5V2.5C3 2.22386 3.22386 2 3.5 2C3.77614 2 4 2.22386 4 2.5V17.5C4 17.7761 3.77614 18 3.5 18Z" fill="currentColor"></path><path d="M8 4C6.89543 4 6 4.89543 6 6V14C6 15.1046 6.89543 16 8 16H10C11.1046 16 12 15.1046 12 14V6C12 4.89543 11.1046 4 10 4H8ZM7 6C7 5.44772 7.44772 5 8 5H10C10.5523 5 11 5.44772 11 6V14C11 14.5523 10.5523 15 10 15H8C7.44772 15 7 14.5523 7 14V6Z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <button onClick={() => dispatch(closeEditor())}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>

            </div>
            <AceEditor
                height="100%"
                width="100%"
                // placeholder="Placeholder Text"
                mode="html"
                theme="monokai"
                name="main-code-editor"
                // onLoad={this.onLoad}
                // onChange={onChange}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={`${buildJSONfromHTML(pages.pages.data.pages[pages.activePageID - 1].html)}`}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
        </div>
        </>
    );
}

export default CodeEditorView;