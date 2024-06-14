function Header() {
    return (
        <header className="bg-[#262626] border-b-2 border-[#323539]">
        <div className="flex justify-between items-center px-4 h-12">
 
            <button className="text-[#8b8b8c] p-2">
            <div className="fill-slate-100 p-1">
                <svg className="w-8 h-8 fill-white text-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 121 109">
                    <path d="M90.0333 52.2913L118.357 0H76.3044L68.03 14.1748H89.717L51.0155 42.7482L61.012 25.5166H36.9888L52.0395 0.177015L51.9463 0H2.80162L30.7154 52.2913L0 109H42.62L57.1214 84.434L71.5483 109H121L90.0333 52.2913Z"/>
                </svg>
                <span className="sr-only">Builder Logo</span>
            </div>
            </button>
 
            <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-50">
                 <span className="font-normal">Stripe</span>
                </span>
            </div>

            <div>
                {/* <span className="text-gray-50">Your Project</span> */}
                {/* Open close menu */}
            </div>

            <div>
            <div className="flex items-center">
                
                <button type="button" className="py-3 px-3 cursor-default transition hover:bg-[#111111] max-w-xs flex items-center text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                </button>

                {/* Request FUll Screen (F11) */}
                <button type="button" className="py-3 px-3 cursor-default transition hover:bg-[#111111] text-gray-50">
                    <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none">
                        <path d="M4.5 14.5v-3a1 1 0 011-1h4a1 1 0 011 1v3m3 0h-12a1 1 0 01-1-1v-12a1 1 0 011-1h8.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V13.5a1 1 0 01-1 1z" stroke="currentColor"></path>
                    </svg>
                    <span className="sr-only">save</span>
                </button>

                <button type="button" className="py-3 px-3 cursor-default transition hover:bg-[#111111] text-gray-50">
                    <span className="sr-only">View Site</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
                
                <button type="button" className="py-3 px-3 cursor-default transition hover:bg-[#111111] relative z-0 inline-flex shadow-sm rounded-md divide-x divide-blue-600">
                    <div className="relative inline-flex items-center bg-blue-500 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-white">
                        <p className="text-xs font-medium">Publish</p>
                    </div>     
                </button>

            </div>
            </div>
        
        
        </div>
        </header>
    );
}

export default Header;