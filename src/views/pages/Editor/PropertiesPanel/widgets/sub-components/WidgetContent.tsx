import { Disclosure } from '@headlessui/react'

function WidgetContent({children}:any) {
    return (
        <Disclosure.Panel static className="text-gray-500">
            {children}
        </Disclosure.Panel>
    );
}

export default WidgetContent;