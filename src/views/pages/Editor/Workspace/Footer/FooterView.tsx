import React, { useContext, useEffect, FC } from 'react';
import { useSelector, useDispatch  } from 'react-redux'; 

import { useFrameInfo } from 'context/FrameInfo';
import { setSelectedElement, setTemporaryElement } from 'stores/features/siteCanvas/siteCanvas';
import { openWorkspaceFooter, toggleWorkspaceFooter } from 'stores/features/workspace/workspaceSlice';

import switchIcons from '../Frame/refactor/switchIcons';
 


function FooterView() {
    const dispatch = useDispatch();
    
    const workspaceFooter:any = useSelector((state:any ) => state.workspace);
    const FrameContextAPI:any = useFrameInfo();

    const nodeTreeElements:any = FrameContextAPI.treeDOM;
    const selectedNode:any = FrameContextAPI.selectedElement;
   

    function setTemporaryElement(node:HTMLElement) {
    }

    function setSelectedNode(node:HTMLElement) {
        FrameContextAPI.setSelectedElement(node)        
    }

    function renderSidewiseNodes():FC.Element {
        if(FrameContextAPI.selectedNodeTree.length === 0) return <></> 
    
        return FrameContextAPI.selectedNodeTree.map((element:HTMLElement) => {
            return (
                <button type="button" onClick={() => setSelectedNode(element)} className={`${element === selectedNode ?? selectedNode.node ? "text-skin-accent-500" : "text-gray-50"}`}>
                    {element && element.nodeName}
                </button>
            )
        })
    }
   
    // TODO: Fix - 'IMG' doesn't show in the tree dom 
    const RecrusiveChildrenRendering = ({element}:any) => {
        if(!element) return <></>

        const elementNode = element.node,
                elementName = element.nodeName,
                elementChildren = element.children,
                elementClasses = element.node.classList;
 
        return (
            <div className="border-l border-gray-700 pl-2 ml-2">

                <button 
                    onClick={() => setSelectedNode(elementNode)} 
                    onMouseEnter={() => setTemporaryElement(elementNode)} 
                    className={`flex w-full space-x-1 transition delay-150 duration-300 ease-in-out bg-transparent hover:bg-[#262626] ${elementNode === selectedNode ?? selectedNode.node ? "text-skin-accent-500" : " text-gray-50"} ${elementNode === FrameContextAPI.temporaryElement ? "bg-[#262626]" : ""}`}
                >
                    <span className="text-cyan-500">{switchIcons(elementName)}</span>
                    <span>{elementName.toLowerCase()}</span>

                    <div className="space-x-2">
                    { element.node &&  [...element.node.classList].map((_class:string) => {
                        return (
                            <span className="text-xs">.{_class}</span>
                        )
                    })}
                    </div>
                
                </button>
                
                {elementChildren  && elementChildren.map((er:any, index:number) => (
                    <RecrusiveChildrenRendering key={index + er + Math.random()} element={er} />
                ))}

            </div>
        );
    }

    const renderTreeDOM = () => {
        return nodeTreeElements && nodeTreeElements.children && nodeTreeElements.children.map((element:any, index:number) => {
            return <RecrusiveChildrenRendering element={element} key={index} />
        })
    }


    return (
        <footer className={`bg-[#1d1d1d] text-gray-100 transition-height ease-in-out duration-150 ${workspaceFooter.isFooterOpen ? "h-[45vh]" : "h-[32px]"}`}>
        <div>

            <div className="flex justify-between items-center">
                <div className="flex items-center text-xs p-2">
                    <div className="flex space-x-2">
                        {renderSidewiseNodes()}
                    </div>
                </div>

                <button onClick={() => dispatch(toggleWorkspaceFooter())}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"  version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>tree-view-line</title><path d="M15,32H11a1,1,0,0,1-1-1V27a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,15,32Zm-3-2h2V28H12Z"></path><path d="M15,16H11a1,1,0,0,0-1,1v1.2H5.8V12H7a1,1,0,0,0,1-1V7A1,1,0,0,0,7,6H3A1,1,0,0,0,2,7v4a1,1,0,0,0,1,1H4.2V29.8h6.36a.8.8,0,0,0,0-1.6H5.8V19.8H10V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17A1,1,0,0,0,15,16ZM4,8H6v2H4ZM14,20H12V18h2Z"></path><path d="M34,9a1,1,0,0,0-1-1H10v2H33A1,1,0,0,0,34,9Z"></path><path d="M33,18H18v2H33a1,1,0,0,0,0-2Z"></path><path d="M33,28H18v2H33a1,1,0,0,0,0-2Z"></path><rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect></svg>
                </button>
            </div>

            <div className="p-2 max-h-[300px] overflow-y-auto">
            <div>
                {renderTreeDOM()}
            </div>
            </div>

        </div>
        </footer>
    );
}

export default FooterView;