import { SubRoute } from '../util/SubRoute.mjs';
import { Led } from './Led.mjs';
import { RGBLed } from './RGBLed.mjs';
import { DualMotor, L293D } from './Motors.mjs'
import PR from "path-to-regexp";

const { pathToRegexp, match, parse, compile } = PR;

export class Robot extends SubRoute {
    constructor() {
        super();
        this.led = new Led();
        this.rgb = new RGBLed();
        this.motors = new DualMotor(new L293D());
        this.setRoute('get', '/light/color/:color', (ctx)=> this.rgb.setColor(ctx.params.color));
        this.setRoute('get','/light/off', this.rgb.turnOff.bind(this.rgb));
        this.setRoute('get', '/light/green', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/light/blue', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/light/color', this.led.turnOff.bind(this.led));
        this.setRoute('get', pathToRegexp('/motor/:direction/:dutyCycle?'), (ctx)=>{
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
                default:
                    ctx.status(400);
            }
        });
    }
}