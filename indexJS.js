window.addEventListener('scroll', () => {
    if(window.scrollY > 665) {
        document.querySelector('header').style.opacity = 1
    } else {
        document.querySelector('header').style.opacity = 0
    }
    if(window.scrollY > 400 && window.scrollY < 1150) {
        document.querySelector('#div1').style.marginLeft = "0%"
        document.querySelector('#div1').style.opacity = 1
    } else {
        document.querySelector('#div1').style.marginLeft = "-166%"
        document.querySelector('#div1').style.opacity = 0
    }
    if(window.scrollY > 1050 && window.scrollY < 2000) {
        document.querySelector('#div2').style.marginTop = "10%"
        document.querySelector('#div2').style.opacity = 1
    } else {
        document.querySelector('#div2').style.marginTop = "0%"
        document.querySelector('#div2').style.opacity = 0
    }

    if(window.scrollY > 1800) {
        document.querySelector('#div3').style.marginTop = "10%"
        document.querySelector('#div3').style.opacity = 1
    } else {
        document.querySelector('#div3').style.marginTop = "0%"
        document.querySelector('#div3').style.opacity = 0
    }
})