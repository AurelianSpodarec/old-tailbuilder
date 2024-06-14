function throttle (callbackFn:any, limit:number) {
    let wait = false;                  
    return function () {       
        if (!wait) {                  
            callbackFn.call();           
            wait = true;               
            setTimeout(function () {   
                wait = false;          
            }, limit);
        }
    }
}

function getElementRect(selectedElement:any) {
    const element = selectedElement.getBoundingClientRect();
    const { x, y, width, height, top, right, bottom, left } = element;

    return {
        x,
        y,
        width,
        height,
        top,
        right,
        bottom,
        left
    }
}

function numberWithCommas(number:number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

export {
    throttle,
    getElementRect,
    numberWithCommas,
    capitalizeFirstLetter
}