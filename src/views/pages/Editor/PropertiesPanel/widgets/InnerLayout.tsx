import { 
    Widget,
    WidgetHeader 
} from "./sub-components";

function InnerLayout({data}:any) {

    return (
        <Widget name="Inner Layout">
        <div> 
            
            {/* <div className="flex flex-row text-gray-50">
                <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 32 32"
                >
                <path d="M4 24H28V26H4z"></path>
                <path d="M26 18H6v-4h20v4m2 0v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2h20a2 2 0 002-2z"></path>
                <path d="M4 6H28V8H4z"></path>
                <path
                    fill="none"
                    d="M0 0H32V32H0z"
                    className="cls-1"
                    data-name="&lt;Transparent Rectangle&gt;"
                    transform="rotate(90 16 16)"
                ></path>
                </svg>
                </button>

                <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 32 32"
                >
                <path d="M24 4H26V28H24z"></path>
                <path d="M18 6v20h-4V6h4m0-2h-4a2 2 0 00-2 2v20a2 2 0 002 2h4a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
                <path d="M6 4H8V28H6z"></path>
                <path
                    fill="none"
                    d="M0 0H32V32H0z"
                    className="cls-1"
                    data-name="&lt;Transparent Rectangle&gt;"
                ></path>
                </svg>
                </button>
            </div> */}

            {/* Column */}
            <div className="space-y-6">
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

            <ul className="flex justify-between fill-gray-500">
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 15 15"><path d="M0 0h1v15H0V0z"></path><path d="M4 3h11v3H4zM4 9h7v3H4z"></path></svg>
                </div>
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 15 15"><path d="M7 0h1v15H7V0z"></path><path d="M0 9h15v3H0zM2 3h11v3H2z"></path></svg>
                </div>
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 15 15"><path d="M14 0h1v15h-1V0z"></path><path d="M0 3h11v3H0zM4 9h7v3H4z"></path></svg>
                </div>
                <div className="w-5 h-5">
                    <svg className="w-full h-full" viewBox="0 0 17 15"><path d="M17 0v15h-1V0h1zM1 0v15H0V0h1z"></path><path d="M14 3v3H3V3h11zM14 9v3H3V9z"></path></svg>
                </div>
            </ul>
            </div>

                {/* <div>
            Inner Layout(Flex) (flex direction: row, column)
            {/* checkboxes */}
            {/* justify-content: flex-star, center, flex-end, space-between
            align-items: flex-start, center, flex-end, stretched
            fexl-wrap[]

                // </div> */}

        </div>
        </Widget>
    );
}

export default InnerLayout;