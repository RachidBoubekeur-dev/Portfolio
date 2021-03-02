window.addEventListener('scroll', () => {
    
    if(window.scrollY > 665) {
        document.querySelector('.fa-file-alt').style.display = "inline-block";
        document.querySelector('.fa-github').style.display = "inline-block";
        document.querySelector('.fa-linkedin').style.display = "inline-block";
        document.querySelector('header').style.opacity = 1;
    } else {
        document.querySelector('header').style.opacity = 0;
        document.querySelector('.fa-file-alt').style.display = "none";
        document.querySelector('.fa-github').style.display = "none";
        document.querySelector('.fa-linkedin').style.display = "none";
    }

    if(window.scrollY > 400 && window.scrollY < 1051) {
        document.querySelector('#div1').style.marginLeft = "0%";
        document.querySelector('#div1').style.opacity = 1;
    } else {
        document.querySelector('#div1').style.marginLeft = "-166%";
        document.querySelector('#div1').style.opacity = 0;
    }

    if(window.scrollY > 1050 && window.scrollY < 1801) {
        document.querySelector('#div2').style.marginTop = "10%";
        document.querySelector('#div2').style.opacity = 1;
    } else {
        document.querySelector('#div2').style.marginTop = "0%";
        document.querySelector('#div2').style.opacity = 0;
    }

    if(window.scrollY > 1800 && window.scrollY < 2301) {
        document.querySelector('#div3').style.marginTop = "10%";
        document.querySelector('#div3').style.opacity = 1;
    } else {
        document.querySelector('#div3').style.marginTop = "0%";
        document.querySelector('#div3').style.opacity = 0;
    }

    if(window.scrollY > 2300 && window.scrollY < 3001) {
        document.querySelector('#div4').style.marginLeft = "0%";
        document.querySelector('#div4').style.opacity = 1;
    } else {
        document.querySelector('#div4').style.marginLeft = "-166%";
        document.querySelector('#div4').style.opacity = 0;
    }

    if(window.scrollY > 3000 && window.scrollY < 3601) {
        document.querySelector('#div5').style.transform = "scaleY(1)";
    } else {
        document.querySelector('#div5').style.transform = "scaleY(0)";
    }

    if(window.scrollY > 3600) {
        document.querySelector('#div6').style.transform = "scale(1)";
        document.querySelector('#div6').style.opacity = 1;
    } else {
        document.querySelector('#div6').style.transform = "scale(1.45)";
        document.querySelector('#div6').style.opacity = 0;
    }

    if(window.scrollY > 4000) {
        document.querySelector('aside').style.transform = "translateY(0px)";
    } else {
        document.querySelector('aside').style.transform = "translateY(380px)";;
    }
})