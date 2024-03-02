if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
window.onscroll = function () { myFunction() };
var header = document.getElementsByClassName("header")[0];
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("headerSticky");
    } else {
        header.classList.remove("headerSticky");
    }
}
navOpen = 0;

openAndClose = () => {
    if (navOpen == 0) {


        document.getElementById("navi").style.width = "70vw";
        navOpen = 1;

    } else {
        document.getElementById("navi").style.width = "0vw"
        navOpen = 0;

    }
}

document.getElementById("openNav").addEventListener("click", function () {
    if (window.innerWidth < 750) {
        openAndClose();
    }
});

window.onresize = function () {
    if (window.innerWidth > 750) {
        document.getElementById("navi").style.width = "initial";

    } else {
        document.getElementById("navi").style.width = "0vw";


    }
}

tileHolder = document.getElementsByClassName("tileHolder")[0];

        tileHolderChildren = tileHolder.children;

        function mickey() {
            for (let i = 0; i < tileHolderChildren.length; i++) {
                if (tileHolderChildren[i].id != "tileHover") {
                    tileHolderChildren[i].style.filter = "blur(3px) saturate(0%)";
                    tileHolderChildren[i].style.opacity = "0.25";
                }
                else {
                    tileHolderChildren[i].style.scale = "1.1"


                }
            }
        }
        function minney() {
            for (let i = 0; i < tileHolderChildren.length; i++) {
                tileHolderChildren[i].style.filter = "blur(0px) saturate(100%)";
                tileHolderChildren[i].style.opacity = "1";
                tileHolderChildren[i].style.scale = "1"



            }
        }

        for (let i = 0; i < tileHolderChildren.length; i++) {
            tileHolderChildren[i].addEventListener("mouseover", function () {
                tileHolderChildren[i].setAttribute("id", "tileHover")
                mickey();
            })
            tileHolderChildren[i].addEventListener("mouseout", function () {
                tileHolderChildren[i].removeAttribute("id", "")
                minney();
            }
            )
        }

        if (location.href.includes('#')) {
            location.href = "/"
        }



