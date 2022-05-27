function arrastrarSoltar(className) {
    const position = { x: 0, y: 0 }

    interact(className).draggable({
        listeners: {
            start(event) {
                console.log(event.type, event.target)
            },
            move(event) {
                position.x += event.dx
                position.y += event.dy

                event.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`
            },
        }, modifiers: [
            interact.modifiers.restrictRect({
                restriction: '.main',
                endOnly: true
            })]
    })
};

function zonaEntrega(obxetivoEntrega) {
    interact(obxetivoEntrega)
        .dropzone({
            ondrop: function (event) {
                alert(event.relatedTarget.id
                    + ' queda situado en '
                    + event.target.id)
            }
        })
        .on('dropactivate', function (event) {
            event.target.classList.add('drop-activated')
        })
};