//botón de menú responsive

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const listcontainer = document.getElementsByClassName('list-container')[0]

toggleButton.addEventListener('click', () => {
    listcontainer.classList.toggle('active')
})