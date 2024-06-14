import react, { useEffect, useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'; 

import DraggableImage from './sub-components/DraggableImage';

const PortalDragCard = (props:any) => {
    const dragDrop = useSelector((state:any ) => state.dragDrop);

    const { isDragging, element, draggableImage, mousePos, imageOffset, handlePointerMove, handlePointerUp, handlePointerDown } = props;

    if(!isDragging) return null

    const doc = document.getElementById('root');
    if(!doc) return null
    return ReactDOM.createPortal( <DraggableImage 
        element={element}
        useRef={draggableImage}
        mousePosition={dragDrop.mouseCords} 
        isDragging={isDragging}
        imageOffset={imageOffset}
        onPointerMove={(e:any) => handlePointerMove(e)} 
        onPointerUp={(e:any) => handlePointerUp(e)}
        onPointerDown={(e:any) => handlePointerDown(e)}
    />, doc)
}

export default PortalDragCard;