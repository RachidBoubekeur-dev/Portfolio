window.addEventListener('scroll', () => {
    if (screen.width <= 768) {
        if (screen.width <= 365) document.querySelector('header').style.height = "90px";
        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(4)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(5)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
            document.querySelector('header > a:nth-of-type(4)').style.display = "none";
            document.querySelector('header > a:nth-of-type(5)').style.display = "none";
        }
    }

    if(screen.width >= 769 && screen.width <= 828) {

        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(4)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(5)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
            document.querySelector('header > a:nth-of-type(4)').style.display = "none";
            document.querySelector('header > a:nth-of-type(5)').style.display = "none";
        }
    
        if(window.scrollY > 500 && window.scrollY < 920) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 865 && window.scrollY < 2100) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 2000 && window.scrollY < 2700) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
    
        if(window.scrollY > 2600 && window.scrollY < 3150) {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
        }
    
        if(window.scrollY > 3050 && window.scrollY < 3680) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3550) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }
    
        if(window.scrollY > 4150) {
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
            document.querySelector('header > a:nth-of-type(4)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(5)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
            document.querySelector('header > a:nth-of-type(4)').style.display = "none";
            document.querySelector('header > a:nth-of-type(5)').style.display = "none";
        }
    
        if(window.scrollY > 500 && window.scrollY < 920) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 865 && window.scrollY < 2000) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 1900 && window.scrollY < 2700) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
    
        if(window.scrollY > 2600 && window.scrollY < 3180) {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
        }
    
        if(window.scrollY > 3050 && window.scrollY < 3600) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3500) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }

        if(screen.width >= 856 && screen.width < 912) {
            if(window.scrollY > 3800) {
                document.querySelector('aside').style.transform = "translateY(25%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else if(screen.width >= 912) {
            if(window.scrollY > 3900) {
                document.querySelector('aside').style.transform = "translateY(25.1%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else {
            if(window.scrollY > 3900) {
                document.querySelector('aside').style.transform = "translateY(81px)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        }
    }

    if(screen.width >= 928 && screen.width < 1235) {
        if(window.scrollY > 590) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(4)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(5)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
            document.querySelector('header > a:nth-of-type(4)').style.display = "none";
            document.querySelector('header > a:nth-of-type(5)').style.display = "none";
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
    
        if(window.scrollY > 1500 && window.scrollY < 2031) {
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
        } else if(screen.width >= 981 && screen.width < 1042) {
            if(window.scrollY > 3325) {
                document.querySelector('aside').style.transform = "translateY(27.5%)";
            } else {
                document.querySelector('aside').style.transform = "translateY(430px)";
            }
        } else {
            if(window.scrollY > 3325) {
                document.querySelector('aside').style.transform = "translateY(0px)";
            } else {
                document.querySelector('aside').style.transform = "translateY(500px)";
            }
        }
    }

    if(screen.width >= 1235 && screen.width < 1400) {
        if(window.scrollY > 630) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(4)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(5)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
            document.querySelector('header > a:nth-of-type(4)').style.display = "none";
            document.querySelector('header > a:nth-of-type(5)').style.display = "none";
        }
    
        if(window.scrollY > 550 && window.scrollY < 970) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 950 && window.scrollY < 2050) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 1980 && window.scrollY < 2700) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
        
        if(window.scrollY > 2600 && window.scrollY < 3150) {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
        }
    
        if(window.scrollY > 3050 && window.scrollY < 3550) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3350) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }

        if(window.scrollY > 4000) {
            document.querySelector('aside').style.transform = "translateY(0px)";
        } else {
            document.querySelector('aside').style.transform = "translateY(500px)";
        }
    }

    if(screen.width >= 1400) {
        if(window.scrollY > 630) {
            document.querySelector('header > a:nth-of-type(1)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(2)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(3)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(4)').style.display = "inline-block";
            document.querySelector('header > a:nth-of-type(5)').style.display = "inline-block";
            document.querySelector('header').style.opacity = 1;
        } else {
            document.querySelector('header').style.opacity = 0;
            document.querySelector('header > a:nth-of-type(1)').style.display = "none";
            document.querySelector('header > a:nth-of-type(2)').style.display = "none";
            document.querySelector('header > a:nth-of-type(3)').style.display = "none";
            document.querySelector('header > a:nth-of-type(4)').style.display = "none";
            document.querySelector('header > a:nth-of-type(5)').style.display = "none";
        }
    
        if(window.scrollY > 550 && window.scrollY < 1070) {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(1)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(1)').style.opacity = 0;
        }
    
        if(window.scrollY > 1000 && window.scrollY < 2300) {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(2)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(2)').style.opacity = 0;
        }
    
        if(window.scrollY > 2200 && window.scrollY < 3000) {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "36px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(3)').style.marginTop = "-70px";
            document.querySelector('section > div:nth-of-type(3)').style.opacity = 0;
        }
        
        if(window.scrollY > 2900 && window.scrollY < 3500) {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "0%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(4)').style.marginLeft = "-166%";
            document.querySelector('section > div:nth-of-type(4)').style.opacity = 0;
        }
    
        if(window.scrollY > 3450 && window.scrollY < 3900) {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(1)";
        } else {
            document.querySelector('section > div:nth-of-type(5)').style.transform = "scaleY(0)";
        }
    
        if(window.scrollY > 3850) {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(1)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 1;
        } else {
            document.querySelector('section > div:nth-of-type(6)').style.transform = "scale(0.8)";
            document.querySelector('section > div:nth-of-type(6)').style.opacity = 0;
        }

        if(screen.width > 1450) {
            if(window.scrollY > 4500) {
                document.querySelector('aside').style.transform = "translateY(0px)";
            } else {
                document.querySelector('aside').style.transform = "translateY(500px)";
            }
        } else {
            if(window.scrollY > 4600) {
                document.querySelector('aside').style.transform = "translateY(0px)";
            } else {
                document.querySelector('aside').style.transform = "translateY(500px)";
            }
        }
    }
})