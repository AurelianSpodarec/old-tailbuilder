import { useMousePosition } from "hooks";
import { setDragging, setElementData, setImageOffset } from 'stores/features/dragDrop/dragDropSlice';


function Panel(props:any) {
    const { data, open, closePanel } = props;

 
    const mousePos = useMousePosition();

    function handlePointerDown(e:any, element:any) {
        e.preventDefault();
        
        // Instead of offset mouse pos here, do it
        // @ts-ignore
        let offsetX = mousePos.pageX - e.target.getBoundingClientRect().left; // @ts-ignore
        let offsetY = mousePos.pageY - e.target.getBoundingClientRect().top;
        // let offsetX = e.target.getBoundingClientRect().left;
        // let offsetY = e.target.getBoundingClientRect().top;

        // dispatch(setImageOffset({offsetX, offsetY}))
        // dispatch(setDragging())
        // dispatch(setElementData(element))

        setTimeout(() => {
            closePanel()
        }, 200)
    }

    function handleDragStart(e:any) {
        e.preventDefault();
        return false;
    }
   
    function RenderSectionBlock({element}:any) {
        return (
            <li className="border hover:border hover:border-cyan-500">
                <img
                    style={{ cursor: dragDrop.isDragging ?  "grabbing" : "grab"}}
                    onMouseDown={(e) => handlePointerDown(e, element)}
                    onDragStart={(e) => handleDragStart(e)}  src={element.thumbnail} 
                />
            </li>
        )
    }

    function RenderSectionList() {
        return (
            <div className="flex space-y-2 flex-col">     
            <ul className="p-4 space-y-6">
                {data !== 0 && data.map((element:any) => {
                    return <RenderSectionBlock element={element} />
                })}
            </ul>
            </div>
        )
    }



    return (
        <>
        {/* // <div id="panel-extention" className="sidebar-scrollbar absolute overflow-auto bg-[#252627] translate-x-[256px] z-30 h-full w-[356px] top-0 left-0"> */}
        {/* @ts-ignore */}
        <div id="panel-extention" className={`${open ? "translate-x-[256px]" : "-translate-x-[356px]"} transition duration-300 ease-in-out sidebar-scrollbar absolute overflow-auto bg-[#252627]  z-10 h-full w-[356px] top-0 left-0`}>
            
            <div className="relative">

                <div className="flex items-center justify-between sticky bg-black p-4 top-0">
                <div>
                    <div className="flex justify-between">
                    <span className="block text-gray-50">Hero Sections</span>
                    <button className="text-gray-50" onClick={() => closePanel()}>
                        x
                    </button>
                    </div>
                    <span className="block text-gray-50 text-xs">Select a component 👇  and drag it to the canvas 👉</span>
                </div>
                </div>

                {<RenderSectionList />}

                 
            </div>

        </div>
        </>
    )
}

export default Panel