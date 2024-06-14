function html2json(html:string) {
    // TODO: Add space at the end of each line break | Fix the href
    const json = html.replace(/href="(.*?)"/g, 'href="javascript:void(0)"').replaceAll('"', '\\"').replace(/(\n)/g, "\\n");
    return json;
}

function json2html(json:any) {
    const html = json.replace(/\\"/g, '"');
    return html;
}

function jsx2html(jsx:string) {
    let html = jsx.replace(/className=/g, "class=");
    html = html.replace(/"/g, '\\"');
    html = html.replace(/href="(.*?)"/g, 'href="javascript:void(0)"')
    return html;    
}


// TODO: recheck this again
function buildJSONfromHTML(...htmlFiles: any) {
    let string = "";

    let html = htmlFiles.forEach((item: any) => string += item);
    string = json2html(jsx2html(string))

    return string;
}   

 
function stringToHTML(str:string) {
    const template = document.createElement('template');
    template.innerHTML = str
    return template.content.firstChild
};


export {
    html2json,
    json2html,
    jsx2html,
    stringToHTML,
    buildJSONfromHTML
}