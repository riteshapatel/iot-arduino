const five = require('johnny-five'),
    board = new five.Board();

let tilt;

board.on('ready', function () {
    tilt = new five.Button(2);

    board.repl.inject({
        button: tilt
    });

    tilt.on('down', function () {
        console.log('down');
    });

    tilt.on('hold', function () {
        console.log('hold');
    });

    tilt.on('up', function () {
        console.log('up');
    })
})