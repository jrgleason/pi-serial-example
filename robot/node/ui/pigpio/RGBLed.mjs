import rgba from 'color-rgba';
import {Led} from './Led.mjs';

export class RGBLed{
    constructor(red = 24, green = 16, blue = 26){
        this.red = new Led(red);
        this.green = new Led(green);
        this.blue = new Led(blue);
    }
    setValue(color, value){
        if(!this[color]) throw new Error("Invalid color");
        this[color] = value;
    }
    setColor(name){

    }
}