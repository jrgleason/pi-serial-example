import { SubRoute } from '../util/SubRoute.mjs';
import { Led } from './Led.mjs';
import { RGBLed } from './RGBLed.mjs';

export class Robot extends SubRoute {
    constructor() {
        super();
        this.led = new Led();
        this.rgb = new RGBLed();
        this.setRoute('get', '/light/on', this.led.turnOn.bind(this.led));
        this.setRoute('get', '/light/off', this.led.turnOff.bind(this.led));
        this.setRoute('get', '/rgb', (ctx, next)=>{
            this.rgb
        })
    }
}