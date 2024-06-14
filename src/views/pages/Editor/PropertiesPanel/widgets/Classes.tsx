import { 
    Widget
} from "./sub-components";

function Classes({data}:any) {
    return (
        <Widget name="Classes" >
           
            <div className="mb-3">
                {/* TODO: Add class to active node */}
                <input className="bg-[#262626] border-[#303030] text-white text-xs p-1.5 w-full rounded-md" placeholder="Add a new class" />
            </div>

            <section className="overflow-y-auto max-h-[200px] sidebar-scrollbar">
            {
                data && data.classList.length !== 0 && [...data.classList].map((item: any, index:number) => {
                    
                    return (
                        <div key={index} className="group text-xs text-cyan-50 bg-[#303030] rounded-md inline-block px-2 py-1.5 m-1">
                        <div className="flex justify-between items-center space-x-2 relative">
                            
                            <div className="flex items-center cursor-default">
                                <svg className="w-4 h-4 mr-1" viewBox="0 0 48 23">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path>
                                </svg>
                                <p>{item}</p>
                            </div>

                            <div className="cursor-pointer hidden group-hover:block absolute right-0 bg-slate-600 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            </div>
                        </div>
                        </div>
                    )

                })
            }
            </section>
        </Widget>
    );
}

export default Classes;