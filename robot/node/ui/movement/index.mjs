import path from 'path';
import {execSync} from 'child_process';

import { SubRoute } from '../SubRoute.mjs';
import { __dirname } from '../unclean.mjs';

export class Movement extends SubRoute {
  constructor() {
    super();
    this.setRoute('get', '/forward', this.onForwardGet.bind(this));
    this.setRoute('get', '/backward', this.onBackwardGet.bind(this));
    this.setRoute('get', '/right', this.onRightGet.bind(this));
    this.setRoute('get', '/left', this.onLeftGet.bind(this));
  }
  execute(cmd, ctx){
    try{
        const stdOut = execSync(cmd)
        ctx.body = stdOut.toString('utf-8');
    } catch(err){
              // TODO: Remove error message
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }

  }
  async onForwardGet(ctx) {
    this.execute(
        "python3 /home/jgleason/Code/pi-serial-example/robot/python/robot-hack/forward.py"
    )
  }
  async onBackwardGet(ctx) {
    this.execute(
        "python3 /home/jgleason/Code/pi-serial-example/robot/python/robot-hack/backward.py"
    )
  }
  async onRightGet(ctx) {
    this.execute(
        "python3 /home/jgleason/Code/pi-serial-example/robot/python/robot-hack/right.py"
    )
  }
  async onLeftGet(ctx) {
    this.execute(
        "python3 /home/jgleason/Code/pi-serial-example/robot/python/robot-hack/left.py"
    )
  }
}