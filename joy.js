/**
 * tracks and persists joystick movement onto Raspberry Pi
 * @author ritesh.patel 
 */
var five = require("johnny-five");
var fs = require('fs');
var board = new five.Board();

board.on("ready", function() {
  // clear data (if any)
  fs.writeFileSync('/dest/pijoy/data.json', '', 'utf-8');

  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    // pin(s) where joystick is wired
    pins: ["A0", "A1"]
  });

  /**
   * @event  
   * joystick change event
   */
  joystick.on("change", function() {
    var data = {ts: new Date().getTime(), x: this.x, y: this.y}
    // persist data onto Raspberry pi 3. This data will be picked up by
    // GreenGrass core running on pi 3. (@Ref ggJoyStick.js)
    fs.appendFile('/dest/pijoy/data.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log('err ', err);
        }
    })
  });
});