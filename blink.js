const five = require('johnny-five');
let board = new five.Board();

board.on('ready', function () {
    // led is plugged in pin 11
    let led = new five.Led(11);

    // blink every 3 seconds
    led.blink(3000);
})