import path from 'path';
import {execSync} from 'child_process';
import Bind from 'bindings';

import { SubRoute } from '../util/SubRoute.mjs';
import { __dirname } from '../unclean.mjs';

const bindings = Bind("robot-ui.node");

export class Movement extends SubRoute {
  constructor() {
    super();
    this.setRoute('get', '/forward', this.onForwardGet.bind(this));
    this.setRoute('get', '/backward', this.onBackwardGet.bind(this));
    this.setRoute('get', '/right', this.onRightGet.bind(this));
    this.setRoute('get', '/left', this.onLeftGet.bind(this));
    this.setRoute('get', '/stop', this.onStopGet.bind(this));
    // bindings.turnOnLight(1, 0, 0);
  }
  async onForwardGet(ctx) {
    try{
        bindings.forward();
        // bindings.turnOnLight(0, 1, 0);
        ctx.body="moving forward";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onBackwardGet(ctx) {
    try{
        bindings.backward();
        // bindings.turnOnLight(0, 0, 1);
        ctx.body="moving backward";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onRightGet(ctx) {
    try{
        bindings.right();
        bindings.turnOnLight(0, 1, 0);
        ctx.body="moving right";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onLeftGet(ctx) {
    try{
        bindings.left();
        bindings.turnOnLight(0, 1, 0);
        ctx.body="moving left";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onStopGet(ctx) {
      try{
          bindings.stop();
          bindings.turnOnLight(1, 0, 0);
          ctx.body="Stopping";
      } catch(err){
          ctx.body = `There was an internal service error ${err}`;
          ctx.response.status = 500;
      }
  }
}