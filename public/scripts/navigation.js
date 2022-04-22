    const header = document.querySelector(".header")
    window.addEventListener("scroll", function(){
        header.classList.toggle("header__sticky", window.scrollY > 200)
    })
    