var sayHello = function(){
    console.log("Hello");
}
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
var bookMarksList = [
    {
        "id":1,
        "name":"Google",
        "url":"http://www.google.com",
        "tags":["google", "search", "find"]
    },
    {
        "id":2,
        "name":"Youtube",
        "url":"http://www.youtube.com",
        "tags":["google", "video"]
    },
    {
        "id":3,
        "name":"Prime Video",
        "url":"http://www.primevideo.com",
        "tags":["amazon", "video"]
    }
]