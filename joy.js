var five = require("johnny-five");
var fs = require('fs');
var board = new five.Board();

board.on("ready", function() {

  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });

  joystick.on("change", function() {
    var data = {ts: new Date().getTime(), x: this.x, y: this.y}
    fs.appendFile('/home/pi/data/data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log('err ', err);
        }
    })
  });
});