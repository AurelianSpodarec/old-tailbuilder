function DraggableImage(props:any) {
    const { useRef, onDragStart, element, mousePosition, isDragging, imageOffset, onPointerMove, onPointerUp, onPointerDown } = props;
    
    // TODO: Make dynamic height
    const imageWidth = 315.6;
    const imageHeight = 180.34;
   
    let offsetX = mousePosition && mousePosition.pageX - imageOffset.offsetX || 0;
    let offsetY = mousePosition && mousePosition.pageY - imageOffset.offsetY || 0;

 
    // let offsetX = mousePosition && mousePosition.pageX - imageOffset.offsetX || 0;
    // let offsetY = mousePosition && mousePosition.pageY - imageOffset.offsetY || 0;

    // console.log("woo", offsetX, offsetY)

    return (
        <div 
            className="fixed z-50 top-0" 
            style={{
                transform:`translate3d(${offsetX}px, ${offsetY}px, 0)`,
                userSelect: isDragging ? "none" : "all",
                pointerEvents: isDragging ? "none" : "all",
            }}
        >
        <img  
            ref={useRef}
            onDragStart={e => onDragStart(e)}
            onPointerDown={e => onPointerDown(e)}
            onPointerMove={e => onPointerMove(e)}
            className="scale-95" 
            src={element && element.thumbnail}
            style={{
                width: `${imageWidth}px`, height: `${imageHeight}px`,
                cursor: isDragging ? "grabbing" : "grab",
            }}
        />
        </div>
    )   
}

export default DraggableImage;