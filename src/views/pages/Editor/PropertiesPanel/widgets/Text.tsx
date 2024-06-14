import { 
    Widget,
    WidgetHeader 
} from "./sub-components";

function Text({data}:any) {
    return (
        <Widget name="Text">

            <div className="grid gap-2 grid-cols-[1fr_68px]">
                <div>
                    <span className="text-xs text-gray-50">Font Family</span> 
                    <span className="sr-only">font family</span>
                </div>
                <div>
                    <span className="text-xs text-gray-50">Monsserate</span>
                    <span className="sr-only">Monsserate</span>
                </div>
            </div>

            <div className="grid gap-2 grid-cols-[1fr_68px]">
                <div>
                    <span className="text-xs text-gray-50">Font Weight</span> 
                    <span className="sr-only">font weight</span>
                </div>
                <div>
                    <span className="text-xs text-gray-50">Bold - 700</span>
                    <span className="sr-only">bold - 700</span>
                </div>
            </div>

            <div className="grid gap-2 grid-cols-[1fr_68px]">
                <div>
                    <span className="text-xs text-gray-50">Font Size</span> 
                    <span className="sr-only">font size</span>
                </div>
                <div>
                    <span className="text-xs text-gray-50">18px</span>
                    <span className="sr-only">change font size. current: 18px</span>
                </div>
            </div>

            <div className="grid gap-2 grid-cols-[1fr_68px]">
                <div>
                    <span className="text-xs text-gray-50">Color</span> 
                    <span className="sr-only">Color</span>
                </div>
                <div>
                    <span className="text-xs text-gray-50">White</span>
                    <span className="sr-only">white</span>
                </div>
            </div>


            
            

            {/* <div>
                Line Height Letter spacing
                Paragraph spacing

                <div className="flex fill-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14"><g fillRule="evenodd"><rect width="20" height="1.5" rx="0.5" transform="rotate(-180 10 .75)"></rect><rect width="20" height="1.5" y="8" rx="0.5" transform="rotate(-180 10 8.75)"></rect><rect width="10" height="1.5" y="4" rx="0.5" transform="rotate(-180 5 4.75)"></rect><rect width="10" height="1.5" y="12" rx="0.5" transform="rotate(-180 5 12.75)"></rect></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14"><g fillRule="evenodd"><rect width="20" height="1.5" rx="0.5" transform="rotate(-180 10 .75)"></rect><rect width="20" height="1.5" y="8" rx="0.5" transform="rotate(-180 10 8.75)"></rect><rect width="10" height="1.5" x="5" y="4" rx="0.5" transform="rotate(-180 10 4.75)"></rect><rect width="10" height="1.5" x="5" y="12" rx="0.5" transform="rotate(-180 10 12.75)"></rect></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14"><g fillRule="evenodd"><rect width="20" height="1.5" rx="0.5" transform="rotate(-180 10 .75)"></rect><rect width="20" height="1.5" y="8" rx="0.5" transform="rotate(-180 10 8.75)"></rect><rect width="10" height="1.5" x="10" y="4" rx="0.5" transform="rotate(-180 15 4.75)"></rect><rect width="10" height="1.5" x="10" y="12" rx="0.5" transform="rotate(-180 15 12.75)"></rect></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14"><g fillRule="evenodd"><rect width="20" height="1.5" rx="0.5" transform="rotate(-180 10 .75)"></rect><rect width="20" height="1.5" y="8" rx="0.5" transform="rotate(-180 10 8.75)"></rect><rect width="20" height="1.5" y="4" rx="0.5" transform="rotate(-180 10 4.75)"></rect><rect width="20" height="1.5" y="12" rx="0.5" transform="rotate(-180 10 12.75)"></rect></g></svg>
                </div>
                left center, rigt, justify
            </div>

            <div>
                more tab: decoraction, list style, case
                position
            </div> */}
         
            {/* <div className="text-gray-50">
            <h4>Font</h4>
            Font Weight

            Aa - font size
            Letter spacing
            line-height
            </div>

            align
            color

            Tag: H1/p/span */}


            {/* left, center, right, justify */}
        </Widget>
    );
}

export default Text;