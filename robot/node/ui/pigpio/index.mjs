import { SubRoute } from '../util/SubRoute.mjs';
import { Led } from './Led.mjs';
import { RGBLed } from './RGBLed.mjs';
import { DualMotor, L293D } from './Motors.mjs'

export class Robot extends SubRoute {
    constructor() {
        super();
        this.led = new Led();
        this.rgb = new RGBLed();
        this.motors = new DualMotor(new L293D());
        this.setRoute('get', '/light/color/:color', (ctx)=> this.rgb.setColor(ctx.params.color));
        this.setRoute('get', '/light/green', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/light/blue', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/light/color', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/motor/:direction', (ctx)=>{
            console.log(`Going ${ctx.params.direction}`);
            switch(ctx.params.direction.toLowerCase()){
                case 'forward':
                    this.motors.allForward();
                    break;
                case 'backward':
                    this.motors.allBackward();
                default
                    ctx.status(400);
            }
        });
    }
}