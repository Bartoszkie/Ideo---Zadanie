function searchInput(){
    const searchVisibility = document.getElementById("search-input");
    if(searchVisibility.style.visibility === "hidden"){
        searchVisibility.style.visibility = "visible";
    }else {
        searchVisibility.style.visibility = "hidden";
    }
}

function closeOpenNav(){
    const leftNavbar = document.getElementById("sideNav").offsetLeft;
    if(leftNavbar == 0){
        closeNav();
    }else if(leftNavbar == -150){
        openNav();
    }
}

function closeNav(){
    const arrow = document.getElementById("arrow").style.transform = "rotate(180deg)";
    document.getElementById("sideNav").style.left="-150px";
}

function openNav(){
    const arrow = document.getElementById("arrow").style.transform = "rotate(360deg)";
    document.getElementById("sideNav").style.left="0px";
}

