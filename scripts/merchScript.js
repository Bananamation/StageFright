function determineHoodie() {
    var hoodieList = document.getElementById("hoodieList");
    document.getElementById("albumHoodie").src = "images/merch/hoodies/" + hoodieList.options[hoodieList.selectedIndex].value;
}

function determineShirt() {
    var shirtList = document.getElementById("shirtList");
    document.getElementById("albumShirt").src = "images/merch/shirts/" + shirtList.options[shirtList.selectedIndex].value;
}
