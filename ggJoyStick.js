/**
 * This module is used to publish data gathered from Arduino board integrated with Raspberry Pi.
 * 
 * Note: Must download and copy `aws-greengrass-core-sdk` under node_modules. There is no `npm` support
 * for this sdk yet...
 * 
 * @author ritesh.patel
 */

const ggSdk = require('aws-greengrass-core-sdk');
const iotClient = new ggSdk.IotData();
const fs = require('fs');

/**
 * @param {Object} err - callback error
 * @param {Object} data - callback data
 */
function publishCallBack(err, data) {
    if (err) {
        console.log("err ", err);
    }
    
    // do nothing
}

/**
 * publishses joystick data 
 */
function publishJoyData() {
    let contents = fs.readFile('/dest/pijoy/data','utf8', function (err, contents) {
        if (err) {
            console.log('err ', err);
        }
        
        let data = {"data": contents};
        
        const pubOpt = {
            topic: 'pi/joy',
            payload: JSON.stringify(data)
        };
        
        iotClient.publish(pubOpt, publishCallBack);
    });
}

// publish joystick data every 3 seconds
setInterval(publishJoyData, 3000);

// placeholder for the handler
exports.handler = function handler(event, context) {
    // empty handler
};
