import { 
    Widget,
    WidgetHeader,
    WidgetContent
} from "./sub-components";

function HTML({data}:any) {
    if(!data) return <></>

    // data.classList.add("py-48")
    return (
        <Widget name="HTML">
        <div>

            <div className="grid gap-2 grid-cols-[68px_1fr]">
                <div className="text-ellipsis">
                    <span className="text-gray-50 text-xs">Tag</span>
                </div>
                <div>
                    <span className="text-gray-50 text-xs">{data.tagName.toLowerCase()}</span>
                </div>
            </div>
            <div className="grid gap-2 grid-cols-[68px_1fr]">
                <div className="text-ellipsis">
                    <span className="text-gray-50 text-xs">ID</span>
                </div>
                <div>
                    {/* if ID is there dont add it anymore */}
                    <input className="bg-transparent text-xs text-gray-50 placeholder-gray-400 border-b border-gray-700 w-full" placeholder="e.g testimonials" />
                </div>
            </div>
            <div className="grid gap-2 grid-cols-[68px_1fr]">
                <div className="text-ellipsis">
                    <input className="bg-transparent text-xs text-gray-50 placeholder-gray-400 border-b border-gray-700 w-full" placeholder="Custom Attribute" />
                </div>
                <div>
                    <input className="bg-transparent text-xs text-gray-50 placeholder-gray-400 border-b border-gray-700 w-full" placeholder="e.g testimonials" />
                </div>
            </div>

        </div>
        </Widget>
    );
}

export default HTML;