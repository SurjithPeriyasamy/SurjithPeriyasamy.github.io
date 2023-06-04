const openbtn = document.querySelector(".button")
const bg = document.getElementById("bg")
const box = document.getElementById("box")

openbtn.addEventListener('click', function (event) {

    bg.classList.add("active")
    box.classList.add("active")
    console.log("hi")
})


const ocbtn = document.querySelectorAll(".js")
ocbtn.forEach(node => {
    node.addEventListener('click', function (event) {
        bg.classList.remove("active")
        box.classList.remove("active")
    })
})
