import { SubRoute } from '../util/SubRoute.mjs';
import { Led } from './Led';

export class Robot extends SubRoute {
    constructor() {
        super();
        this.led = new Led();
        this.setRoute('get', '/light/on', this.led.turnOn.bind(this.led));
        this.setRoute('get', '/light/off', this.led.turnOff.bind(this.led));
    }
}