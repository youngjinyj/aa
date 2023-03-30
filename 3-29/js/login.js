function checkFiled(obj) {
    if ( obj.value == "" )
        obj.focus();
}
function idFocus(){
    document.getElementById('ID').focus();
}

window.onload = function() {
    idFocus();
}