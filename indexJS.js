window.addEventListener('scroll', () => {
    if(screen.width <= 500) {
        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
        }
    }

    if(screen.width >= 769 && screen.width <= 828) {

        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
        }
    
        if(window.scrollY > 500 && window.scrollY < 920) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 865 && window.scrollY < 1801) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 1800 && window.scrollY < 2231) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
    
        if(window.scrollY > 2230 && window.scrollY < 2751) {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
        }
    
        if(window.scrollY > 2750 && window.scrollY < 3301) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3300) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }
    
        if(window.scrollY > 3700) {
            document.querySelector('aside').style.transform = "translateY(138px)";
        } else {
            document.querySelector('aside').style.transform = "translateY(380px)";
        }
    }

    if(screen.width >= 829 && screen.width <= 927) {
        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
        }
    
        if(window.scrollY > 500 && window.scrollY < 920) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 865 && window.scrollY < 1801) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 1700 && window.scrollY < 2231) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
    
        if(window.scrollY > 2180 && window.scrollY < 2751) {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
        }
    
        if(window.scrollY > 2635 && window.scrollY < 3301) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3200) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }

        if(screen.width >= 856 && screen.width < 912) {
            if(window.scrollY > 3400) {
                document.querySelector('aside').style.transform = "translateY(25%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else if(screen.width >= 912) {
            if(window.scrollY > 3500) {
                document.querySelector('aside').style.transform = "translateY(25.1%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else {
            if(window.scrollY > 3600) {
                document.querySelector('aside').style.transform = "translateY(81px)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        }
    }

    if(screen.width >= 928) {
        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
        }
    
        if(window.scrollY > 500 && window.scrollY < 920) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 865 && window.scrollY < 1601) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 1500 && window.scrollY < 2231) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
        
        if(screen.width < 972) {
            if(window.scrollY > 2180 && window.scrollY < 2551) {
                document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
                document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
            } else {
                document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
                document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
            }
        } else {
            if(window.scrollY > 2000 && window.scrollY < 2551) {
                document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
                document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
            } else {
                document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
                document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
            }
        }
    
        if(window.scrollY > 2535 && window.scrollY < 3051) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3050) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }

        if(screen.width >= 912 && screen.width < 972) {
            if(window.scrollY > 3400) {
                document.querySelector('aside').style.transform = "translateY(25.5%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else if(screen.width >= 972 && screen.width < 976) {
            if(window.scrollY > 3400) {
                document.querySelector('aside').style.transform = "translateY(26.5%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else if(screen.width >= 976 && screen.width < 981) {
            if(window.scrollY > 3325) {
                document.querySelector('aside').style.transform = "translateY(27%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else {
            if(window.scrollY > 3325) {
                document.querySelector('aside').style.transform = "translateY(27.5%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        }
    }
})