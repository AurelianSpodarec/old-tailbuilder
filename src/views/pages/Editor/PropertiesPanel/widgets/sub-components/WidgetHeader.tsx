import { Disclosure } from '@headlessui/react'

function WidgetHeader(props:any) {
    const { name } = props

    return (
        <Disclosure.Button className="w-full">
        <div className="flex justify-between items-center text-gray-50 mb-3">
            <h2 className="text-xs font-medium">{name}</h2>

            <button className="text-gray-50 h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
        </div>
        </Disclosure.Button>
    );
}

export default WidgetHeader;