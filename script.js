function show(thingy){
    const menu = document.getElementById(thingy)
    if(menu.style.display == "none"){
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
}
