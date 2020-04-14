import path from 'path';
import {execSync} from 'child_process';

import { SubRoute } from '../SubRoute.mjs';
import { __dirname } from '../unclean.mjs';

export class Movement extends SubRoute {
  constructor() {
    super();
    this.setRoute('get', '/forward', this.onForwardGet.bind(this));
    this.setRoute('get', '/backward', this.onBackwardGet.bind(this));
  }
  async onForwardGet(ctx) {
    try{
        const stdOut = execSync("python3 /home/jgleason/Code/pi-serial-example/robot/python/robot-hack/forward.py")
        ctx.body = stdOut.toString('utf-8');
    } catch(err){
        // TODO: Remove error message
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onBackwardGet(ctx) {
    try{
        const stdOut = execSync("python3 /home/jgleason/Code/pi-serial-example/robot/python/robot-hack/backward.py")
        ctx.body = stdOut.toString('utf-8');
    } catch(err){
        // TODO: Remove error message
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
}