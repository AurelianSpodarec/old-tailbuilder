import { Fragment, useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { Dialog, Transition } from '@headlessui/react';

import { openShortcutsModal, closeModal} from 'stores/features/modals/modalSlice';


export default function ShortcutsView({open}:any) {
    let [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch();

    
    function closeModalView() {
        setIsOpen(false)
        dispatch(closeModal())
    }

    function openModal() {
    setIsOpen(true)
    }

    useEffect(() => {
    if(open === "shortcuts") {
        openModal()
    }
    // dispatch(closeModal())
    }, [open])
    return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModalView()}>

            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>
            

            <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >


                <Dialog.Panel className="max-h-[80vh] min-h-[80vh] max-w-[950px] min-w-[800px] lg:w-[950px] w-full transform overflow-hidden  p-6 text-left align-middle shadow-xl transition-all">    
                {/* <div className="flex overflow-hidden justify-center min-h-0 flex-col h-full w-full items-center"> */}
                <div className="flex flex-col overflow-hidden rounded-md bg-[#36393f] mx-auto relative">
            
                        <header className="text-gray-50 flex justify-between border-b border-gray-600">
                        <div className="py-6 px-12">
                            <h2 className="text-2xl mb-2">Keyboard Combos</h2>
                            <p className="max-w-lg text-gray-200">Master these to spped up your work and become the greatest builder of all time! Achieve Level Over 9999!</p>
                        </div>
                        </header>

                        <div className="overflow-y-auto sidebar-scrollbar relative min-h-0">
                        <div className="flex flex-col px-12 pt-6">

                            <article className="flex flex-col">
                                <h3>Navigation</h3>
                                <div className="flex flex-col">
                                    <span>Navigate Between Pages</span>

                                    <div>
                                        <div className="flex">
                                            <span>CTRL</span>
                                            <span>ALT</span>
                                            <span>Up</span>
                                        </div>
                                    </div>
                                </div>
                            </article>  
                            <article className="flex flex-col">
                                <h3>Navigation</h3>
                                <div className="flex flex-col">
                                    <span>Navigate Between Pages</span>

                                    <div>
                                        <div className="flex">
                                            <span>CTRL</span>
                                            <span>ALT</span>
                                            <span>Up</span>
                                        </div>
                                    </div>
                                </div>
                            </article>  
                            <article className="flex flex-col">
                                <h3>Navigation</h3>
                                <div className="flex flex-col">
                                    <span>Navigate Between Pages</span>

                                    <div>
                                        <div className="flex">
                                            <span>CTRL</span>
                                            <span>ALT</span>
                                            <span>Up</span>
                                        </div>
                                    </div>
                                </div>
                            </article>  
                            <article className="flex flex-col">
                                <h3>Navigation</h3>
                                <div className="flex flex-col">
                                    <span>Navigate Between Pages</span>

                                    <div>
                                        <div className="flex">
                                            <span>CTRL</span>
                                            <span>ALT</span>
                                            <span>Up</span>
                                        </div>
                                    </div>
                                </div>
                            </article>  


                        </div>
                        </div>

                </div>
                {/* </div>      */}
                </Dialog.Panel>


            </Transition.Child>
            </div>
            </div>

        </Dialog>
        </Transition>
    </>
    )
}
