import react, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Tab } from '@headlessui/react'

import Panel from './menus/panel';
import { getSectionComponentsByID, getSections } from 'services/fakeApi/api/sections';

import { setActivePage } from "stores/features/pages/pagesSlice";

function Drawer() {
    const dispatch = useDispatch();

    const pages = useSelector((state:any ) => state.pages)
    const pagesData = pages.pages.data.pages

    const navigation = useSelector((state:any) => state.navigation)
    const selectedPage = navigation.openPage;

    const [panelNav, setPanelNav] = useState([])
    const [panelContent, setPanelContent] = useState([])
    const [isPanelOpen, setIsPanelOpen] = useState(false);


    function fetchPanelNav() {
        const sections = getSections();
        if(!sections) return
        // @ts-ignore: Unreachable code error
        setPanelNav(sections.data.sections)
    }

    function closePanel() {
        setIsPanelOpen(false);
    }


    function openPanel(category:any) {
        const section = getSectionComponentsByID(category.id)
        if(!section.data.sections[0]) return
        console.log(section.data.sections[0].components)
        // @ts-ignore: Unreachable code error
        setPanelContent(section.data.sections[0].components)
        setIsPanelOpen(true)
    }

    function renderNavigation() {
        return panelNav.map((category:any) => {
            if(category.category === "navigation") {
                return (
                    <div>
                        <li key={category.id} onClick={() => openPanel(category)} className="transition border border-transparent hover:border hover:border-gray-300 rounded pl-8 py-2">
                            <button className="cursor-default">{category.name}</button>
                        </li>
                    </div>
                )
            }
        })
    }

    function renderSections() {
        return panelNav.map((category:any) => {
            if(category.category === "section") {
                return (
                    <div>
                        <li key={category.id} onClick={() => openPanel(category)} className="transition border border-transparent hover:border hover:border-gray-300 rounded pl-8 py-2">
                            <button className="cursor-default">{category.name}</button>
                        </li>
                    </div>
                )
            }
        })
    }

    useEffect(() => {
        fetchPanelNav()
    }, [])

    useEffect(() => {
        console.log("wooof", selectedPage !== "pages")
        if(selectedPage !== "pages") closePanel()
    }, [selectedPage])
     
    function addElements() {
        return (
        <div className="flex flex-col w-full"> 
        <Tab.Group>

            <div className="sticky bg-black top-0 z-10">
            <div className="">
            <Tab.List className="grid grid-cols-2">
                {/* <Tab className={({ selected }) => selected ? 'border-b border-cyan-500 text-sm text-gray-50 py-3.5' : 'border-b border-transparent text-sm text-gray-50 py-3.5'}>
                    <span>Elements</span>
                </Tab> */}
                <Tab className={({ selected }) => selected ? 'border-b border-cyan-500 text-sm text-gray-50 py-3.5' : 'border-b border-transparent text-sm text-gray-50 py-3.5'}>
                    <span>Sections</span>
                </Tab>
            </Tab.List>
            </div>
            </div>

            <div className="relative flex flex-col w-full h-full">
            <div id="main-panel" className="relative">    
            <Tab.Panels>

{/* 
                    <Tab.Panel>
                    <div>

                        <div className="border-b">
                        <div className="p-4">
                            <h3 className="mb-4 text-xs text-gray-200 font-semibold">Layoout</h3>
                            <ul className="grid grid-cols-3 gap-4 text-gray-200">
                                <li>
                                    <span>Section</span>
                                    <span>Grid</span>
                                </li>
                            </ul>
                        </div>
                        </div>

                        <div className="border-b">
                        <div className="p-4">
                            <h3 className="mb-4 text-xs text-gray-200 font-semibold">Typography</h3>
                            <ul className="grid grid-cols-3 gap-4 text-gray-200">
                                <li>
                                    <span>Heading</span>
                                </li>
                                <li>
                                    <span>Paragraph</span>
                                </li>
                                <li>
                                    <span>Span</span>
                                </li>
                            </ul>
                        </div>
                        </div>

                        <div className="border-b">
                        <div className="p-4">
                            <h3 className="mb-4 text-xs text-gray-200 font-semibold">List</h3>
                            <ul className="grid grid-cols-3 gap-4 text-gray-200">
                                <li>
                                    <span>Ordered List</span>
                                </li>
                                <li>
                                    <span>Unordered List</span>
                                </li>
                                <li>
                                    <span>List Item</span>
                                </li>
                            </ul>
                        </div>
                        </div>

                        <div className="border-b">
                        <div className="p-4">
                            <h3 className="mb-4 text-xs text-gray-200 font-semibold">Media</h3>
                            <ul className="grid grid-cols-3 gap-4 text-gray-200">
                                <li><span>Image</span></li>
                                <li><span>Video</span></li>
                                <li><span>YouTube</span></li>
                                <li><span>Embed</span></li>
                            </ul>
                        </div>
                        </div>

                    </div>
                    </Tab.Panel> */}


                    <Tab.Panel>
                    <div className="flex flex-col space-y-4 p-4">

                        <div>
                        <h3 className="mb-4 text-xs text-gray-200 font-semibold">Navigation</h3>
                        <ul className="text-gray-100 text-xs">  
                            {renderNavigation()}
                        </ul>
                        </div>
                        

                        <div>
                        <h3 className="mb-4 text-xs text-gray-200 font-semibold">Sections</h3>
                        <ul className="text-gray-100 text-xs"> 
                            {renderSections()}
                        </ul>
                        </div>

                    </div>
                    </Tab.Panel>


            </Tab.Panels>
            </div>
            </div>

        </Tab.Group>
        </div>    
        )
    }
    





    function MenuPage(props:any) {
        const {page, key } = props;
        const isActive = page.id === pages.activePageID

        return (
            <button onClick={() => dispatch(setActivePage(page.id))} key={key} className={` flex relative group py-1 px-3 ${isActive ? `text-slate-50 bg-[#121212]` : "text-slate-300"} space-x-3 px-4 pr-6 items-center justify-between  `}>
                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className="text-sm font-medium">{page.name}</span>
    
                    <div className="absolute right-2 w-4 h-4 hover:bg-gray-500 rounded-full p-[1px]">
                      
                    </div>
                </div>
                
                <div>
                    {/* <div className="h-2 w-2 rounded-full bg-cyan-600"></div> */}
                </div>
            </button>
        )
    }
    
    function menuPages() {
        return (
            <div>

                <h2>Pages</h2>

                <div>
                {pagesData.length !== 0 && pagesData.map((page:string, index: number) => {
                    return <MenuPage key={index} page={page} />
                })}
                </div>

            </div>
        )
    }






    function renderPage() {
        if(selectedPage === "add-elements") {
            return addElements()
        } else if("pages") {
            return menuPages()
        } else {
            return <></>
        }
    }


    return (
        <div className={`relative ${selectedPage ? "" : "hidden"} `}>
            <div id="drawer" className="h-full relative z-30 overflow-y-auto flex-none w-[256px] bg-[#262626] sidebar-scrollbar">
            <div className="flex flex-col w-full">

                { renderPage() }

            </div>
            </div>

            <Panel open={isPanelOpen} closePanel={closePanel} data={panelContent}/>
        </div>
    );
}


export default Drawer;