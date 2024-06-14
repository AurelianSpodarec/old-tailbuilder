import React, { useEffect } from "react";

import { LayerGroupLight, CodeLight, CircleInfoLight, PlusSquareLight } from "../../assets/svg/light";
import { BookSolid, CloseSolid, GearSolid, PaletteSolid, HashSolid, MediaSolid } from "../../assets/svg/solid";
import PageSolid from "../../assets/svg/solid/page";

interface SVGInterface {
    icon: any;
    outline?: any;
    stroke?: string; 
    width?: number; 
    height?: number; 
    className?: string;
}

const icons = [  
    {
        "icon": "close",
        "types": {
            "solid": <CloseSolid />,
            "regular": "",
            "light": "",
            "thin": "" 
        }
    },
    {
        "icon": "eye",
        "types": {
            "solid": <PaletteSolid />,
            "regular": "",
            "light": "",
            "thin": "" 
        }
    },
    {
        "icon": "file",
        "types": {
            "solid": <PaletteSolid />,
            "regular": "",
            "light": "",
            "thin": "" 
        }
    },
    {
        "icon": "floppy-disk",
        "types": {
            "solid": <PaletteSolid />,
            "regular": "",
            "light": "",
            "thin": "" 
        }
    },
    {
        "icon": "layer-group",
        "types": {
            "solid": <PaletteSolid />,
            "regular": "",
            "light": "",
            "thin": "" 
        }
    },
    {
        "icon": "light",
        "types": {
            "solid": <PaletteSolid />,
            "regular": "",
            "light": "",
            "thin": "" 
        }
    },
    {
        "icon": "palette",
        "types": {
            "solid": <PaletteSolid />,
            "regular": "",
            "light": "",
            "thin": ""
        }
    },
    {
        "icon": "code",
        "types": {
            "solid": "",
            "regular": "",
            "light": <CodeLight />,
            "thin": ""
        }
    },
    {
        "icon": "gear",
        "types": {
            "solid": <GearSolid />,
            "regular": "",
            "light": "",
            "thin": ""
        }
    },
    {
        "icon": "layer-group",
        "types": {
            "solid": "",
            "regular": "",
            "light": <LayerGroupLight />,
            "thin": ""
        }
    },
    {
        "icon": "circle-info",
        "types": {
            "solid": "",
            "regular": "",
            "light": <CircleInfoLight />,
            "thin": ""
        }
    },
    {
        "icon": "book",
        "types": {
            "solid": <BookSolid />,
            "regular": "",
            "light": "",
            "thin": ""
        }
    },
    {
        "icon": "hash",
        "types": {
            "solid": <HashSolid />,
            "regular": "",
            "light": "",
            "thin": ""
        }
    },
    {
        "icon": "plus-square",
        "types": {
            "solid": "",
            "regular": "",
            "light": <PlusSquareLight />,
            "thin": ""
        }
    },
    {
        "icon": "page",
        "types": {
            "solid": <PageSolid />,
            "regular": "",
            "light": "",
            "thin": ""
        }
    },
    {
        "icon": "media",
        "types": {
            "solid": <MediaSolid />,
            "regular": "",
            "light": "",
            "thin": ""
        }
    },
]


function SVG({icon, type}:{icon:string, type?:any}) {
   
    return (
        <>
        { 
            icons.map(filteredIcon => {
                if(filteredIcon.icon === icon) {

                    switch(type) {
                        case "solid":
                            return filteredIcon.types["solid"]
                            break;
                        case "regular":
                            return filteredIcon.types["regular"]
                            break;
                        case "light":
                            return filteredIcon.types["light"]
                            break;
                        case "thin":
                            return filteredIcon.types["thin"]
                            break;
                        default: 
                        return <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M143.9 398.6C131.4 394.1 124.9 380.3 129.4 367.9C146.9 319.4 198.9 288 256 288C313.1 288 365.1 319.4 382.6 367.9C387.1 380.3 380.6 394.1 368.1 398.6C355.7 403.1 341.9 396.6 337.4 384.1C328.2 358.5 297.2 336 256 336C214.8 336 183.8 358.5 174.6 384.1C170.1 396.6 156.3 403.1 143.9 398.6V398.6zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>
                          
                    }    
                }
            })
        }
        </>
    );
}

SVG.defaultProps = {
    width: "24",
    height: "24",
    stroke: "#000"
};

export default SVG;


// const iconss = {
//     star: {
//         "solid": "",
//         "regular": "",
//         "light": <LayerGroupLight />,
//         "thin": ""
//     },
//     caret: {
//         "solid": "",
//         "regular": "",
//         "light": <LayerGroupLight />,
//         "thin": ""
//     }
//   }
  
//   const Svg = ({ icon, type }) => {
//     const Icon = icons[icon];
  
//     return iconss[icon][type]
//   }