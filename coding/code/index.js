
document.querySelector(".button").addEventListener("click", function ()
{
    run();
})

function run()
{
    var text = editor.getValue();
    var csscode = "<style>" + editor1.getValue()+ "</style>";
    var jscode = editor2.getValue();
    let output = document.querySelector(".editor #output");
    output.contentDocument.body.innerHTML = text + csscode;
    output.contentWindow.eval(jscode);
}

var editor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
    mode :'xml',
    theme: "tomorrow-night-eighties",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true
});

var editor1 = CodeMirror.fromTextArea(document.getElementById('css-code'), {
    mode :'css',
    theme: "tomorrow-night-eighties",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true
});

var editor2 = CodeMirror.fromTextArea(document.getElementById('js-code'), {
    mode :'javascript',
    theme: "tomorrow-night-eighties",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true
});