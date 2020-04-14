import SerialPort from 'serialport';
import parse from 'csv-parse';

const output=[];
const parser = parse({
  to_line: 10
});

const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 115200
});

port.on('readable', function () {
  let record
  while (record = port.read()) {
    output.push(record.toString());
    console.log(`The collection is \n ${JSON.stringify(output)}`);
  }
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
