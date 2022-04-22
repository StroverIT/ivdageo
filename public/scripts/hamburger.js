window.onload = (event) => {
        const hamburger = document.querySelector(".header__nav__hamburger")
        const headerNavWidth = document.querySelector(".header")
        const menu = document.querySelector(".header__nav__menu")
        const arrow = document.querySelector(".full-arrow__icon")
        const main = document.querySelector("main")
        const isHome = main.classList.contains("home")

        arrow.remove()
        arrow.addEventListener("click", closeSubMenu)
        hamburger.addEventListener("click", menuChecker)
        menu.addEventListener("click", subChecker)

        if(!isHome){
            hamburger.classList.remove("d-lg-none")
            menu.classList.remove("d-lg-none")
        }
        let menuOpen = false;
        let subMenuOpen = false;

        function menuChecker() {
            if(!menuOpen){
                openMenu()
            }else{
                closeMenu()
            }
        }
        function subChecker(e){
            
            const target = e.target
            const isMenu = Array.from(target.classList).indexOf("menu")
            if(isMenu == -1) return
            const next = target.nextElementSibling
            if(!subMenuOpen){
                openSubMenu(next)
            }else{
                closeSubMenu(next)
            }
        }
        document.styleSheets[0].insertRule('\
        @keyframes anim {\
            from { transform: translateY(-50%);  opacity: 0; }\
            to   { transform: translateY(0); opacity: 100%;}\
        }'
    );
        document.styleSheets[0].insertRule('\
        @keyframes hide {\
            from { transform: translateY(0); opacity: 100%;  }\
            to   { transform: translateY(-50%);  opacity: 0;}\
        }'
    );
        function openMenu(){
            hamburger.classList.add("open")
            menu.style.top = `${headerNavWidth.offsetHeight }px`
            menu.style.display = "block"
            menu.style.animation = 'anim 0.2s linear forwards';
            menu.classList.remove("d-none")
            setTimeout(function(){
                menuOpen = true
            }, 200)

        }
        function closeMenu(){
            hamburger.classList.remove("open")
            menu.style.animation = 'hide 0.2s linear forwards';
            const a = () =>setTimeout(function(){
                menu.style.display = "none"
                menuOpen = false
            }, 200)
            if(menuOpen){
              a()
            }
        }
        
        function openSubMenu(el){
            el.classList.add("subOpen")
            el.prepend(arrow)
            subMenuOpen = true
        }
        function closeSubMenu(el){
            const target = el.target
            const tag = el.target.tagName
            if(tag == "svg")target.parentElement.classList.remove("subOpen");
            
            if(tag == "path")target.parentElement.classList.remove("subOpen");
            subMenuOpen = false

        }
  };