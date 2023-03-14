// ver abajo

var abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
    document.body.scrollTop = 850;
    document.documentElement.scrollTop = 850;

});


// color en el header

var enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });

        event.target.classList.add('activo');

    });
});
