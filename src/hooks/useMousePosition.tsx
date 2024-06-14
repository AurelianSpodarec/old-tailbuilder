import { useEffect, useState } from 'react';
import { throttle } from 'utility/common';

// TODO: Create more general and robust hooks

const useMousePosition = () => {
    const [position, setPosition] = useState({});

    
    // TODO: Debounce to 100ms or custom
    useEffect(() => {
        const setFromEvent = (e:MouseEvent) => throttle(setPosition(e), 500);

        window.addEventListener("mousemove", setFromEvent);
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, [])

    return position;
}

export default useMousePosition;