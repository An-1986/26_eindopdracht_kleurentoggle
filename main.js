const menuClass = document.querySelector('.menu')
const backgroundBody = document.getElementById('background')
const colorMenu = document.getElementById('color-menu')
const buttons = document.querySelectorAll(".box")

const togglecolorMenu = function () {
    colorMenu.addEventListener('click', function () {
        menuClass.classList.toggle('hide-menu')
    })
}

const changeBackground = function () {
    buttons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            menuClass.classList.toggle('hide-menu')
            backgroundBody.removeAttribute("class")
            backgroundBody.classList.add(e.target.classList[1])
        })
    })
}

togglecolorMenu();
changeBackground();