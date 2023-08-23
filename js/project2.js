let protobutton = document.querySelector(".portfolio-button button");
let extend = document.querySelector(".extend");
let portoimages = document.querySelectorAll(".gallery .image")
let protolinks = document.querySelectorAll(".portfolio-links button")
protobutton.onclick = function () {
    extend.style.display = "grid";
}

protolinks.onclick = gallerybuttons();

function gallerybuttons() {
    protolinks[0].onclick = function () {
        for (let i = 0; i < portoimages.length; i++) {
            portoimages[i].style.display = "block";
        }
    }

    protolinks[1].onclick = function () {
        for (let i = 0; i < portoimages.length; i++) {
            portoimages[i].style.display = "block";
        }
        for (let i = 0; i < portoimages.length; i++) {
            if (portoimages[i].dataset.goal != "app") {
                portoimages[i].style.display = "none"
            }
        }
    }

    protolinks[2].onclick = function () {
        for (let i = 0; i < portoimages.length; i++) {
            portoimages[i].style.display = "block";
        }
        for (let i = 0; i < portoimages.length; i++) {
            if (portoimages[i].dataset.goal != "photo") {
                portoimages[i].style.display = "none";
            }
        }
    }
    protolinks[3].onclick = function () {
        for (let i = 0; i < portoimages.length; i++) {
            portoimages[i].style.display = "block";
        }
        for (let i = 0; i < portoimages.length; i++) {
            if (portoimages[i].dataset.goal != "web") {
                portoimages[i].style.display = "none";
            }
        }
    }
    protolinks[4].onclick = function () {
        for (let i = 0; i < portoimages.length; i++) {
            portoimages[i].style.display = "block";
        }
        for (let i = 0; i < portoimages.length; i++) {
            if (portoimages[i].dataset.goal != "print") {
                portoimages[i].style.display = "none";
            }
        }
    }
}

let circle = document.querySelectorAll(".circle ul li button");
let main = document.querySelector("main")
let active = document.querySelector(".circle .active")
let current = 0;

circle[1].classList.add("active")

circle.onclick = buttonimages();

function buttonimages() {
    circle[0].onclick = function () {
        main.style.backgroundImage = "url(css/assets/the-cosmic-torii_1280x720.jpg)"
        removeactive()
        circle[0].classList.add("active")
    }
    circle[1].onclick = function () {
        main.style.backgroundImage = "url(css/assets/wallpaperflare.com_wal.jpg)"
        removeactive()
        circle[1].classList.add("active")
    }
    circle[2].onclick = function () {
        main.style.backgroundImage = "url(css/assets/pxfuel.jpg)"
        removeactive()
        circle[2].classList.add("active")
    }
}

function removeactive() {
    circle.forEach(function (button) {
        button.classList.remove("active")
    })
}
