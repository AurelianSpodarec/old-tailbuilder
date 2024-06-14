import { htmlTagNames } from "config";

export default function checkTagNames(selectedTag: any) {
    if(!selectedTag) return;

    return htmlTagNames.map(function(tag) {
        if(tag.id === selectedTag) 
        return tag.name
    })
}

export {
    checkTagNames
}