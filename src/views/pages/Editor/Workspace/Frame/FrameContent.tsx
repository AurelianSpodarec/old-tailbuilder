import React, { useContext, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import Frame, { FrameContextConsumer , FrameContextProvider, useFrame } from 'react-frame-component';

import { FrameInfoProvider, useFrameInfo } from 'context/FrameInfo';
import { openPropertiesPanel } from 'stores/features/propertiesPanel/propertiesPanelSlice';
import {  setFrameHeight } from 'stores/features/siteCanvas/siteCanvas';

import { throttle } from 'utility/common';
import { stringToHTML } from 'utility/htmlSerialization';
import { disableDragging, setMousecords } from 'stores/features/dragDrop/dragDropSlice';


const FrameContent = (props:any) => {
    const { document: frameDocument, window: frameWindow } = useFrame();
    
    const dispatch = useDispatch();
    let dragDrop = useSelector((state:any ) => state.dragDrop);

    const FrameContextAPI = useFrameInfo()

    function getNodesUpToClick(node:any) {
        let nodes = []
        nodes.push(node)   

        if(node.parentNod !== null) {
            let lastPos = node.parentNode
            while(lastPos !== null) {
                lastPos = lastPos.parentNode
                nodes.unshift(lastPos)
            } 
        }
        return nodes;
    }

    // TODO: To add a "add sectoin" you need to get the element before body, so anything that's one parent before body will have a section or if its inside the 'main'

    function getNodeTree(node: any) {
        if (!frameDocument || !node.hasChildNodes()) return;
      
        let children: any[] = [];
        for (const childNode of node.childNodes) {
          const childTree = getNodeTree(childNode);
          if (childTree) {
            children.push(childTree);
          }
        }
      
        return {
          node,
          nodeName: node.nodeName,
          parentName: node.parentNode?.nodeName,
          children,
          classes: [...node.classList],
        };
      }
    


    function sectionElement(section: any, event:any) {
        event.stopPropagation() 
        // On click target node
        // insert element after node/section
        // @ts-ignore
        // console.log(FrameContextAPI)
        // console.log(section, event)
        // console.log("Section Clicked")
        // if(section !== event.target) return
    }

    function getSections(frameDocument:any) {
        if(!frameDocument) return
        // const sections = document.querySelectorAll(':scope > body > div > .frame-content > div > *');
        let data:any = []
        const sections = frameDocument.querySelectorAll(':scope > body > div > div > div > *'); // this gets header

        // const sections = document.querySelector(':scope > body > div > div > div > *');
        // if set selected element is 'section' 
        sections.forEach(function(section:any) { 
            // If selected node is any node from the 'sections', what is selected matches
            section.addEventListener("click", (event:any) => sectionElement(section, event)) 
        }, false);
    }
    


    //////////////////////////////////////////////
    // Mouse Events
    //////////////////////////////////////////////

    function setTemporaryElement(event:any) {
        if(!event) return;
        event.stopPropagation()
        //@ts-ignore
        FrameContextAPI.setTemporaryElement(event.target)    
    }
 
    function setSelectedElement(event:any) {
        if(!event) return;
        event.stopPropagation()
        // @ts-ignore
        FrameContextAPI.setSelectedElement(event.target)
        // @ts-ignore
        FrameContextAPI.setSelectedNodeTree(getNodesUpToClick(event.target))
        dispatch(openPropertiesPanel())
    }

    function handleMouseUp(event:any) {
        //@ts-ignore
        // FrameContextAPI.temporaryElement.before(stringToHTML(dragDrop.element.html))
        // console.log("frame context api mouse up", FrameContextAPI && FrameContextAPI)
        // console.log("Frame context api", FrameContextAPI)
        
        // console.log("iFrame - dragDrop state", dragDrop)
        if(!dragDrop.isDragging) return
        event.target.before(stringToHTML(dragDrop.element.html))
        dispatch(disableDragging())
        //@ts-ignore
        dispatch(setTemporaryElement(null))
    }
 
  
    const getScrollPosition = (event:any) => {
        // console.log("scroll pos", document.body.offsetTop )
        if(!frameDocument || !frameWindow) return
              // Used to refresh the selected UI when scrolling, change this to something else
        // dispatch(setFrameHeight(frameDocument.documentElement.scrollHeight))
        
        let offsetY = frameDocument.body.getBoundingClientRect().top
        console.log("offset top", Math.abs(offsetY))

    }
 
    function handleMouseMove(event:any) { 
        let frame = document.getElementById('frame');
        let frameRect = frame && frame?.getBoundingClientRect()

        let frameOffsetLeft =  frameRect && frameRect.left;
        let frameOffsetTop = frameRect && frameRect.top;

        const workSpaceFooter = 20
console.log("wew", frame?.getBoundingClientRect())
        //@ts-ignore
        let offsetX = event.screenX - frameDocument.body.getBoundingClientRect().left    
        //@ts-ignore
        let offsetY = event.screenY - frameOffsetTop + dragDrop.imageOffset.offsetY - dragDrop.imageOffset.offsetY + (frame?.getBoundingClientRect().top / 2) - workSpaceFooter

 
        console.log("inside drag drop", dragDrop.imageOffset)
        const ab = {
            clientX: event.clientX,
            clientY: event.clientY,
            pageX: offsetX,
            pageY: offsetY,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
        }
 
        dispatch(setMousecords(ab))
 
    }
 
    function getOffsetTop(element:any) {
        var offset = element.getBoundingClientRect();

        return offset;
    }



    //////////////////////////////////////////////
    // Other
    //////////////////////////////////////////////
      
    function onLoad(frameDocument:any) {
        frameDocument.body.style.userDrag = "none"
        frameDocument.body.style.userSelect = "none"

        // const handlerScrollPosition = (event:any) => throttle(getScrollPosition(event), 100);
        const handlerScrollPosition = (event:React.MouseEvent<HTMLElement>) => getScrollPosition(event);
        const handlerSetSelectedElement = (event:React.MouseEvent<HTMLElement>) => setSelectedElement(event);
        const handlerSetTemporaryElement = (event:React.MouseEvent<HTMLElement>) => setTemporaryElement(event);
        // TODO: Add throttle to debounce hundreds of events per move
        const handlerMouseMove = (event:React.MouseEvent<HTMLElement>) => handleMouseMove(event);
        const handlerMouseUp = (event:React.MouseEvent<HTMLElement>) => handleMouseUp(event);

        frameDocument.addEventListener("scroll", handlerScrollPosition);
        frameDocument.addEventListener("mouseover", handlerSetTemporaryElement);
        frameDocument.addEventListener("mouseup", handlerMouseUp)
        frameDocument.addEventListener("mousemove", handlerMouseMove)
        frameDocument.addEventListener("click", handlerSetSelectedElement)
        return () => {
            frameDocument.removeEventListener("scroll", handlerScrollPosition);
            frameDocument.removeEventListener("mouseup", handlerMouseUp)
            frameDocument.removeEventListener("mouseover", handlerSetTemporaryElement);
            frameDocument.removeEventListener("mousemove", handlerMouseMove)
            frameDocument.removeEventListener("click", handlerSetSelectedElement)
        }
    }
    
    useEffect(() => {
        const nodeTree = getNodeTree(frameDocument?.querySelector(':scope > body > div > .frame-content > div'))    
        // @ts-ignore  
        FrameContextAPI.setTreeDOM(nodeTree) 
    }, []);

    useEffect(() => {
        const clearHandlers = onLoad(frameDocument)
        return clearHandlers;
    }, [dragDrop])

    return null;
};

export default FrameContent;

// on redux update refresh this?












    // Dragging type: section or element

    // TODO:
    // If user is grabbing type of section, disable highligting, and only highlight section top/below
    // When use is at the top of the frame, or bottom, make the content inside scroll slowly the direction the mouse is at
    // 
    
    // TODO: Disable iFrame body when hover is active
    // style={{ "userSelect": dragDrop.isDragging ? "none" : "auto"}}

    // function appendBefore() {
    //     const doc = frameDocument?.querySelector(':scope > body > div > .frame-content > div');

    //     if(!dragDrop.element.html) return
    //     if(!doc) return

    //     // @ts-ignore
    //     doc.before(stringToHTML(dragDrop.element.html))
    // }

    // useEffect(() => {
    //     appendBefore()
    // },[dragDrop])
