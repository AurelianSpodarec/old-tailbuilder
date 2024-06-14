import { 
    Widget,
    WidgetHeader 
} from "./sub-components";

 
function Image({data}:any) {
 
    return (
        <Widget name="Image">

            <div className="text-xs">

                <div className="flex items-center">
                    <div className="min-w-[55px]">
                        <span className="text-gray-100">src</span>
                    </div>
                    <div className="flex items-center relative justify-between flex-1">
                        <div>
                            <span className="text-gray-300 inline-block text-ellipsis">https://d26a57yd</span>
                        </div>
                        <img className="max-w-[40px] object-cover h-10 min-h-[32px] rounded-lg w-full" src={data.src} alt={data.alt}/>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="min-w-[55px]">
                        <span className="text-gray-100">alt</span>
                    </div>
                    <div>
                        <span className="text-gray-100">{data.alt === "" ? "Set ALT text" : data.alt}</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="min-w-[55px]">
                        <span className="text-gray-100">Loading</span>
                    </div>
                    <div>
                        <span className="text-gray-100">Lazy Loading ${`(>)`}</span>
                    </div>
                </div>

            </div>

            {/* <button>Upload new file</button> */}

            <div className="flex flex-col">
                {/* <div>
                    <img className="rounded-lg w-full h-full" src={data.content.src} alt=""/>
                </div>
                <div>
                    <span className="text-gray-100">{data.content.src}</span>
                    <span className="text-gray-600">Default placeholders</span>
                </div> */}
            </div>

        </Widget>
    );
}

export default Image;