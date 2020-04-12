import SerialPort from 'serialport';
const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 115200
});

port.on('readable', function () {
  console.log('Readable Data:', port.read().toString())
})
port.on('error', function(err) {
  console.log('Error: ', err.message);
});
port.on('close', function(){
  console.log('The port is closed');
});
port.on('open', err =>{
  console.log("The port is opened");
})
// port.open(function (err) {
//   if (err) {
//     return console.log('Error opening port: ', err.message)
//   }
//   console.log("port opened");
// });
