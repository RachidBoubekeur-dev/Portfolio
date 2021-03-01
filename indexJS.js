window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        document.querySelector('header').style.opacity = 1
    } else {
        document.querySelector('header').style.opacity = 0
    }
    if(window.scrollY > 400) {
        document.querySelector('#div1').style.left = "19%"
    } else {
        document.querySelector('#div1').style.left = "-67%"
    }
})