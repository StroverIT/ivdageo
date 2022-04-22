const menu = document.querySelector("main .main__navigation ul")
const menuElements = Array.from(menu.children)
const menuElLen = menuElements.length
menu.addEventListener("mouseover", function(e){
    const currMenu = e.target
    const parent = currMenu.closest(".submenu")
    if(!parent){
        for(let i = 1; i < menuElLen; i+=2){
            menuElements[i].style.display = "none"
        }
        const subMenu = currMenu.nextElementSibling
        subMenu.style.display = "block"
    }
     
    
})
menu.addEventListener("mouseleave", function(e){
    for(let i = 1; i < menuElLen; i+=2){
        menuElements[i].style.display = "none"
    }
})