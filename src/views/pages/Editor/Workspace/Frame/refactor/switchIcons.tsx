export default function switchIcons(tagName:string) {
            
    // <Svg icon={tagName.icon.solid} />

    switch(tagName) {
        case 'P':
            return (
            <svg className="w-5 h-5" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7V5L5 5V7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 5L12 19M12 19H10M12 19H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            )
            break;
        case 'IMG':
            return (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path>
            </svg>
            )
            break;
        case 'A':
        case 'BUTTON':
            return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            )
            break;
        case 'H1':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm71.8,44.9a8.3,8.3,0,0,0-8.2.4l-24,16a8,8,0,0,0,8.8,13.4l11.6-7.8V200a8,8,0,0,0,16,0V108A8,8,0,0,0,223.8,100.9Z"></path></svg>
            )
            break;
        case 'H2':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm88,136H208l34.3-45.8.2-.3A31.8,31.8,0,0,0,248,128a32,32,0,0,0-61.5-12.5,8,8,0,0,0,14.8,6.3A15.9,15.9,0,0,1,216,112a16,16,0,0,1,13.4,24.8l-43.7,58.3A7.5,7.5,0,0,0,184,200a8,8,0,0,0,5.5,7.6,7.3,7.3,0,0,0,2.5.4h48a8,8,0,0,0,0-16Z"></path></svg>
            )
            break;
        case 'H3':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm85.5,94.5a37.9,37.9,0,0,0-12-7.9l21.1-30a8,8,0,0,0,.5-8.3A8.1,8.1,0,0,0,240,100H192a8,8,0,0,0,0,16h32.6l-19.2,27.4a8,8,0,0,0-.5,8.3A8.1,8.1,0,0,0,212,156a20,20,0,1,1-14.1,34.1,8.1,8.1,0,0,0-11.4,11.4,36.1,36.1,0,0,0,51-51Z"></path></svg>
            )
         break;
        case 'H4':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Zm86,74a6,6,0,0,0-6,6v26H196.5l21.2-60a6,6,0,1,0-11.4-4l-24,68a6.3,6.3,0,0,0,.8,5.5A6,6,0,0,0,188,174h42v26a6,6,0,0,0,12,0V136A6,6,0,0,0,236,130Z"></path></svg>
            )
            break;
        case 'H5':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Zm61.9,86a34.3,34.3,0,0,0-11.9,2.1l4.9-30.1H240a6,6,0,0,0,0-12H199.8a6,6,0,0,0-5.9,5l-7.8,48.2a5.8,5.8,0,0,0,3.2,6.3,5.9,5.9,0,0,0,6.9-1,22.1,22.1,0,0,1,15.7-6.5,21.7,21.7,0,0,1,15.6,6.5,21.7,21.7,0,0,1,0,31,21.7,21.7,0,0,1-15.6,6.5,22.1,22.1,0,0,1-15.7-6.5,6,6,0,0,0-8.5.1,5.9,5.9,0,0,0,.1,8.4,34.2,34.2,0,0,0,48.2.1A34.1,34.1,0,0,0,246,176a34.1,34.1,0,0,0-34.1-34Z"></path></svg>
            )
            break;
        case 'H6':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0ZM250,168a34,34,0,1,1-63.7-16.5l.3-.6,32.2-54a6.1,6.1,0,0,1,10.4,6.2l-18.8,31.4A33.8,33.8,0,0,1,250,168Zm-12,0a22,22,0,1,0-22,22A22.1,22.1,0,0,0,238,168Z"></path></svg>
            )
            break;
        case 'OL':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M222,128a6,6,0,0,1-6,6H104a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM104,70H216a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12ZM216,186H104a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM42.7,65.4,50,61.7V108a6,6,0,0,0,12,0V52a6.1,6.1,0,0,0-2.8-5.1,6.2,6.2,0,0,0-5.9-.3l-16,8a6,6,0,1,0,5.4,10.8ZM70.6,169.2A20,20,0,0,0,54,138a19.9,19.9,0,0,0-18.4,12.2,6,6,0,1,0,11,4.7A8,8,0,0,1,62,158a7.6,7.6,0,0,1-1.3,4.4l-25.5,34a6,6,0,0,0-.6,6.3A6.2,6.2,0,0,0,40,206H68a6,6,0,0,0,0-12H52l18.4-24.6Z"></path></svg>    
                 )
            break;
        case 'UL':
            return (
                <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="far" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M80 48H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416-136H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16z"></path></svg>    
            )
            break;
        case 'DIV':
            return (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor"></path></svg>
            )
            break;
        case 'SVG':
            return (
                <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="face-laugh" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fixed-0-class="fa-fw padding-y-3xs"><path fill="currentColor" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"></path></svg>
            )
        break;
        default:
    }
}