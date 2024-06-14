import react, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from 'react-redux';

import { useFrameInfo } from "context/FrameInfo";
import { closePropertiesPanel } from 'stores/features/propertiesPanel/propertiesPanelSlice';

import checkTagNames from 'utility/specific';

import { Border, Classes, Effect, HTML, InnerLayout, Position, Image, Shadow, Spacing, Text } from './widgets';
import Svg from "views/atoms/SVG";



function PropertiesPanel() {
    const dispatch = useDispatch();

    const FrameContextAPI = useFrameInfo()// @ts-ignore: Unreachable code error
    const selectedElement = FrameContextAPI.selectedElement;// @ts-ignore: Unreachable code error
    const isImage = selectedElement && FrameContextAPI.selectedElement.tagName === "IMG"

    const propertiesPanel = useSelector((state:any ) => state.propertiesPanel);
    const siteCanvas = useSelector((state:any ) => state.siteCanvas);

    const [isElementSelected, setIsElementSelected] = useState(false);
    

 
    return (
        <div className={`relative ${propertiesPanel.isOpen ? "" : "hidden"} `}>


            <aside className={`flex flex-col relative overflow-hidden h-full w-[255px] bg-[#1d1d1d] ${propertiesPanel.isOpen ? "" : "hidden"} `}>
            <div className="flex flex-col flex-1 overflow-hidden">

                <header className="flex flex-row w-full border-b border-gray-700 mb-4">
                <div className="p-4 flex justify-between items-center w-full">
                    <h2 className="text-gray-50 font-medium">{checkTagNames(selectedElement && selectedElement.tagName)}({selectedElement && selectedElement.tagName})</h2>

                    <button className="text-gray-50 w-5 h-5" onClick={() => dispatch(closePropertiesPanel())}>
                        <Svg icon="close" type="solid" />
                    </button>
                </div>
                </header>
                
                <div className="flex flex-col h-full w-full overflow-y-auto">
                <div className="flex flex-col ">

                        <HTML data={selectedElement} />
                        <Classes data={selectedElement} />
                        { isImage && <Image data={selectedElement} /> }
                        { !isImage && <Text data={selectedElement} /> }
                        { <Position data={selectedElement} /> }
                        { !isImage && <InnerLayout data={selectedElement} /> }

                        {/* <Effect />
                        <Border />
                        <Position />
                        <Spacing />
                        */}

                </div>
                </div>
            </div>
            </aside>

            {/* <div className="absolute z-10 shadow -left-[300px] top-0 bg-[#262626] h-[400px] w-[300px]">
            <div className="text-gray-50">

                <div className="p-4">
                    <h2>Text Settings</h2>
                </div>
                     background-color: #b279f91a;
        background-image: linear-gradient(135deg,#464aef80 10%,transparent 0,transparent 50%,#4682ef80 0,#466eef80 60%,transparent 0,transparent);
        background-size: 7.07px 7.07px;  
                <div className="bg-[#393939]">
                <div className="h-[150px] py-6 px-8">


                    <div className="relative flex h-full rounded-sm justify-center w-full border transition border-dashed border-gray-300 p-2">
                        <div className="rounded-sm flex-none border border-black bg-gray-800 w-[25px] h-full"></div>

                            {/* w-full to w-0 to animate */}
                        {/* <div className="rounded-sm overflow-hidden min-w-0 grow-0 w-full mx-2 text-center transition-all ease-in-out text-pink-700 bg-pink-400  h-full">Auto</div>


                        <div className="rounded-sm flex-none border border-black bg-gray-800 w-[25px] h-full"></div>


                        <div className="rounded-sm overflow-hidden min-w-0 grow-0 w-full mx-2 text-center transition-all ease-in-out text-pink-700 bg-pink-400  h-full">Auto</div>


                        <div className="rounded-sm flex-none border border-black bg-gray-800 w-[25px] h-full"></div>
                    </div>


                </div>
                </div>
                    
                <div className="p-4">
                    This
                </div>

            </div>
            </div> */} 


        </div>
    );
}

export default PropertiesPanel;