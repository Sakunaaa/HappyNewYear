const params = new URLSearchParams(window.location.search)
const name = params.getAll('name')
const span = document.querySelector("#name")

span.innerText = name + "!"