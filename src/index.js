import { Fireworks } from "fireworks-js";

const container = document.querySelector('.fireworks-container')
const fireworks = new Fireworks(container, { })

fireworks.setOptions({ delay: { min: 10, max: 15 }})

const runFireworks = document.getElementById("fireworks-btn")
runFireworks.addEventListener("click", (e) => {
    e.preventDefault()
    fireworks.start()
} )

const parms = new URLSearchParams(window.location.search)
for (const param of params) {
    console.log(param)
  }