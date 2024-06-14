import { 
    Widget,
    WidgetHeader 
} from "./sub-components";

function Position({data}:any) {
    return (
        <Widget name="Position">
            
            {/* TODO: Rethink and re-factor the logic of UX */}
            <ul className="flex justify-between fill-gray-500">
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 15 15"><path d="M0 0h15v1H0V0z"></path><path d="M3 4h3v7H3V4zM9 4h3v11H9z"></path></svg>
                </div>
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 15 15"><path d="M0 7h15v1H0V7z"></path><path d="M9 0h3v15H9zM3 2h3v11H3z"></path></svg>
                </div>
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 15 15"><path d="M15 15H0v-1h15v1z"></path><path d="M12 11H9V4h3v7zM6 11H3V0h3z"></path></svg>
                </div>
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 16 18"><path d="M15.132.116v1h-15v-1h15zM15.132 16.116v1h-15v-1h15z"></path><path d="M11.133 2.116v3h-7v-3zM11.132 12.117v3h-7v-3h7z"></path></svg>
                </div>
            </ul>
            {/* <div>
            Align self: flex-start, center, flex-end, stretch
            Freestyle: (absolute) top, bottom, left right- top/bottom(row center)- right/left/bottom(column center)
            Flex: 
            </div> */}
            
           
        </Widget>
    );
}

export default Position;