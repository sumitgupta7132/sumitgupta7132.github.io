function search() {
    var data = document.forms["RegForm"]["search"];
   

    if (data.value ==" ") {
        window.alert("Not found");
        name.focus();
        return false;
    }

    
    return true;
}