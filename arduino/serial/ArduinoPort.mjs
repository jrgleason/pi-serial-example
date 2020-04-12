import SerialPort from 'serialport';
export class ArduinoPort extends SerialPort{
	constructor(){
		super('/dev/ttyACM0', {
			baudRate: 115200,
  			autoOpen: false
		});
		this.on('open', this.onOpen.bind(this));
		this.on('readable', this.onReadable.bind(this));
		console.log("Object completed");
	}
	onOpen(err){
		if(err) throw new Error(`Error opening port ${err}`);
		console.log('Port Opened');
	}
	onReadable(){
		console.log(`Data is: ${this.read()}`);
	}
}
