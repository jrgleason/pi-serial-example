import { SubRoute } from '../util/SubRoute.mjs';
import { Led } from './Led.mjs';
import { RGBLed } from './RGBLed.mjs';
import { DualMotor, L293D } from './Motors.mjs'
import {SimpleSensor} from './ObjectSensor.mjs'

export class Robot extends SubRoute {
    constructor() {
        super();
        this.led = new Led();
        this.sensor = new SimpleSensor(this.led);
        this.rgb = new RGBLed();
        this.motors = new DualMotor(new L293D());
        this.setRoute('get', '/light/color/:color', (ctx)=> this.rgb.setColor(ctx.params.color));
        this.setRoute('get','/light/off', this.rgb.turnOff.bind(this.rgb));
        this.setRoute('get', '/light/green', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/light/blue', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/light/color', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/motor/:direction/:dutyCycle?', (ctx)=>{
            console.log(`Going ${ctx.params.direction}`);
            switch(ctx.params.direction.toLowerCase()){
                case 'forward':
                    console.log('Going Forward');
                    this.motors.allForward(ctx.params.dutyCycle);
                    break;
                case 'backward':
                    console.log('Going Backward');
                    this.motors.allBackward(ctx.params.dutyCycle);
                    break;
                case 'stop':
                    this.motors.allStop();
                    break;
                case 'left':
                    this.motors.goLeft();
                    break;
                case 'right':
                    this.motors.goRight();
                    break;
                default:
                    ctx.status(400);
            }
        });
    }
}