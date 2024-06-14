import { useState } from "react";


function Tooltip(props:any) {
    const { children, name, position } = props;

    const [isOpen, setIsOpen] = useState(false);

    //TODO: Delay the tooltip show by 1second after the user hovers
    //TODO: Add positions - Top/ right/ bottom/left

    return (
        <div className="relative">

            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                {children}
            </div>
            <div className={`whitespace-nowrap z-10 text-xs text-gray-50 w-auto absolute -right-2 px-2 py-2 rounded h-fit translate-x-full bg-gray-700 top-0 bottom-0 ${isOpen ? "" : "hidden"} `} style={{ "userSelect": "none"}}>
                {name}
            </div>
        </div>
    );
}

export default Tooltip;