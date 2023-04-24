function lista_function(list_id, button_id) {
    var x = document.getElementById(list_id);
    var y = document.getElementById(button_id);
    if (x.style.display === "block") {
        x.style.display = "none";
        y.innerHTML = "Exibir mais"
    } 
    else {
        x.style.display = "block";
        y.innerHTML = "Exibir menos"
    }
}