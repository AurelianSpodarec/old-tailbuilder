import React, {  useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Frame from 'react-frame-component';


import { useFrameInfo } from 'context/FrameInfo';
import { openPropertiesPanel, togglePropertiesPanel } from 'stores/features/propertiesPanel/propertiesPanelSlice';

import { zoomOptions } from 'config';

import { buildJSONfromHTML, stringToHTML } from 'utility/htmlSerialization';
 
import checkTagNames from 'utility/specific';

import FrameContent from './FrameContent';
import tailwindcss from './container/tailwindcss';
import switchIcons from './refactor/switchIcons';

 
function FrameView(props:any) {
    const { pages } = props;
    
    const iframeRef:any = React.useRef();
    
    const dispatch = useDispatch();
    const siteCanvas = useSelector((state:any ) => state.siteCanvas);
    const workspace = useSelector((state:any ) => state.workspace);
    const dragDrop = useSelector((state:any ) => state.dragDrop);
 
    const [frameState, setFrameState] = useState({ initialContent: tailwindcss()});
    const [width, setWidth] = useState("1200px")
    
    const FrameContextAPI = useFrameInfo()
    const sidebarScrollBarWidth = 17

    const htmlElementTest = `<section class="h-12 bg-red-500">JSDKJS~#################</section>`;
    
    
    // TODO: Need to re-think UX
    function insertSectionTop(node:any) {
        // node.before(stringToHTML(htmlElementTest))
    }

    function insertSectionBottom(node:any) {
        // node.after(stringToHTML(htmlElementTest))
    }

    function moveSectionUp(node:any) {
        if(node.previousElementSibling) {
            node.parentNode.insertBefore(node, node.previousElementSibling)
        }
    }

    function moveSectionDown(node:any) {
        if(node.nextElementSibling) {
            node.parentNode.insertBefore(node.nextElementSibling, node)
        }
    }

    const addSectionButton = (node:any) => {
       
        return (
            <>
            <div className="absolute left-4 top-4" style={{ "userSelect": "all", "pointerEvents": "all" }}>
            <div className="flex flex-col space-y-2">

                <button onClick={() => moveSectionUp(node)} className={`w-6 h-6 ${node.previousElementSibling ? "bg-cyan-500" : "bg-gray-500 cursor-not-allowed"}`}>
                    <svg className="fill-white w-full h-full" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
                <button onClick={() => moveSectionDown(node)} className={`w-6 h-6 ${node.nextElementSibling ? "bg-cyan-500" : "bg-gray-500 cursor-not-allowed"}`}>
                    <svg className="fill-white w-full h-full" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>

            </div>
            </div>

            <button onClick={() => insertSectionTop(node)} className="flex items-center absolute -top-4 left-1/2 right-0 rounded-lg w-8 h-8 bg-cyan-600 hover:bg-cyan-400" style={{ "userSelect": "all", "pointerEvents": "all" }}>
                <svg className="fill-white p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
            </button>

            <button onClick={() => insertSectionBottom(node)} className="flex items-center absolute -bottom-4 left-1/2 right-0 rounded-lg w-8 h-8 bg-cyan-600 hover:bg-cyan-400" style={{ "userSelect": "all", "pointerEvents": "all" }}>
                <svg className="fill-white p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
            </button>
            </>
        )
    }
 
    const highlightSelectedElement = () => {
        // @ts-ignore: Unreachable code error
        const selectedElement = FrameContextAPI.selectedElement;
        if(!selectedElement) return

        // console.log(selectedElement.tagName === "SECTION")
        const isSection = selectedElement.tagName === "SECTION"
     
        // @ts-ignore: Unreachable code error
        const node = selectedElement;
        const element = selectedElement.getBoundingClientRect() 
        const tagName = selectedElement.tagName;

        // TODO: Use transform3D translate for left/right etc
        return (
            <div className="absolute border-2 border-cyan-600 bg-green-500/20 z-10" style={{ "width": `${element.width}px`,  "height": `${element.height}px`, "transform": ` translateY(${element.top }px)`, "left": `${element.left}px`, "right": `${element.right}px` }}>
            <div className="relative h-full w-full">

                {isSection && 
                    addSectionButton(node)
                }

                {tagName !== "SECTION" &&
                    <div id="breadcrumb" className="mt-[-23px] absolute">
                        <div className="flex flex-center space-x-2 bg-green-600 m-[-2px] text-xs text-white">

                                <span>{switchIcons(tagName)}</span>
                                <span className=" py-1 px-2">{checkTagNames(tagName)}</span>
                            <button onClick={() => dispatch(togglePropertiesPanel())} className="px-1 cursor-default border-l border-green-200 hover:bg-green-500" style={{ "userSelect": "all", "pointerEvents": "all" }} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg> 
                            </button>

                        </div>
                    </div>
                }

                {isSection && 
                    addSectionButton(node)
                }

            </div>
            </div>
        );
    }

    const highlightTemporaryElement = () => {
        // @ts-ignore: Unreachable code error
        const temporaryElement = FrameContextAPI.temporaryElement;
        if(!temporaryElement) return
        
        const element = temporaryElement.getBoundingClientRect()// @ts-ignore: Unreachable code error
        const tagName = temporaryElement.tagName;

        return (
            <div className="absolute border-2 border-dashed border-blue-600" style={{ "width": `${element.width}px`,  "height": `${element.height}px`, "transform": ` translateY(${element.top }px)`, "left": `${element.left}px`, "right": `${element.right}px` }}>
            <div id="breadcrumb" className="mt-[-23px] absolute">
                <span className="text-blue-600 text-sm p-1 m-[-2px]">
                    {checkTagNames(tagName)}
                </span>
            </div>
            </div>
        );
    }
 
    if(!frameState.initialContent) return <></>
    return (
        <main className="js-droppable bg-[#121212] relative h-full w-full overflow-hidden">
        <div className="h-full w-full">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex overflow-hidden flex-row items-center p-4">

            <div id="frame-container" className="relative w-full overflow-y-auto h-full mx-auto my-10" style={{ "userSelect": "none", "width": `${1200 + sidebarScrollBarWidth}px`, "transform": `scale(${zoomOptions[workspace.zoomIndex]})`}}>
            {/* <div className="text-gray-50">Home --- Width: 20200px</div> */}
            <div className="relative min-h-[1px] h-full w-full" style={{"contain": "content", "height": `${siteCanvas.frameHeight === 0 ? "100%" : siteCanvas.frameHeight + "px"}` }}>

               
                <div id="outside-container-directly-on-iframe" className="absolute top-0 bottom-0 h-full w-full z-10"  style={{ "userSelect": "none", "pointerEvents": "none" }}>
                <div className="relative h-full">
                    {highlightTemporaryElement()}
                    {highlightSelectedElement()}
                </div>
                </div>
                    {/* Overlay of frame height, and track mouse on that? */}

                <Frame
                    id="frame"
                    ref={iframeRef}
                    initialContent={frameState.initialContent}
                    onLoad={event => event.stopPropagation()}
                    className="min-h-full bg-white h-full w-full w-[1200px]"
                    style={{ "pointerEvents": "auto" }}
                    loading="lazy"
                >
                    <div dangerouslySetInnerHTML={{__html: buildJSONfromHTML(pages.pages.data.pages[pages.activePageID - 1].html) }} />  
                    {/* <div></div>    */}
                    <FrameContent />
                </Frame>

            </div>
            </div>

        </div>
        </div>
        </main>
    );
    // return (
    //     <main className="js-droppable bg-[#121212] relative h-full w-full overflow-hidden">
    //     <div className="h-full w-full">
    //     <div className="absolute top-0 right-0 bottom-0 left-0 flex overflow-hidden flex-row items-center p-4">


    //         <div id="frame-container" className="relative w-full overflow-y-auto h-full mx-auto my-10" style={{ "userSelect": "none", "width": `${1200 + sidebarScrollBarWidth}px`, "transform": `scale(${zoomOptions[workspace.zoomIndex]})`}}>
    //         {/* <div className="text-gray-50">Home --- Width: 20200px</div> */}
    //         <div className="relative min-h-[1px] h-full w-full" style={{"contain": "content", "height": `${siteCanvas.frameHeight === 0 ? "100%" : siteCanvas.frameHeight + "px"}` }}>


    //             <div id="outside-container-directly-on-iframe" className="absolute top-0 bottom-0 h-full w-full z-10"  style={{ "userSelect": "none", "pointerEvents": "none" }}>
    //             <div className="relative h-full">
    //                 {highlightTemporaryElement()}
    //                 {highlightSelectedElement()}
    //             </div>
    //             </div>

    //                 {/* Overlay of frame height, and track mouse on that? */}

    //             <Frame
    //                 ref={iframeRef}
    //                 initialContent={frameState.initialContent}
    //                 onLoad={event => event.stopPropagation()}
    //                 className="min-h-full bg-white h-full w-full w-[1200px]"
    //                 style={{ "pointerEvents": "auto" }}
    //                 loading="lazy"
    //             >
    //                 <div dangerouslySetInnerHTML={{__html: buildJSONfromHTML(pages.pages.data.pages[pages.activePageID - 1].html) }} />  
    //                 {/* <div></div>    */}
    //                 <FrameContent />
    //             </Frame>


    //         </div>
    //         </div>

    //     </div>
    //     </div>
    //     </main>
    // );
}

export default FrameView;