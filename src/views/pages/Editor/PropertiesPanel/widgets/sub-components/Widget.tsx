import { Disclosure, Transition } from '@headlessui/react'
import WidgetContent from './WidgetContent';
import WidgetHeader from './WidgetHeader';

function Widget(props:any) {
    const { name, children } = props
    return (
        <Disclosure>
        {({ open }) => (

            <div className="relative border-b border-gray-700">
            <div className="p-4">

                <WidgetHeader name={name} />
              
                {/* <Transition
                show={!open}
                enter="transition duration-100 ease-out"
                enterFrom="transform  opacity-0"
                enterTo="transform  opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform  opacity-100"
                leaveTo="transform opacity-0"
            > */}
                {!open && (
                    <WidgetContent>
                        {children}
                    </WidgetContent>
                )}
                {/* </Transition> */}

            </div>
            </div>
         
         )}
        </Disclosure>
    );
}

export default Widget;