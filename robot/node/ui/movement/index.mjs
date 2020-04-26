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
  }
  async onForwardGet(ctx) {
    try{
        bindings.forward();
        ctx.body="moving forward";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onBackwardGet(ctx) {
    try{
        bindings.backward()
        ctx.body="moving backward";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onRightGet(ctx) {
    try{
        bindings.right()
        ctx.body="moving right";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onLeftGet(ctx) {
    try{
        bindings.left()
        ctx.body="moving left";
    } catch(err){
        ctx.body = `There was an internal service error ${err}`;
        ctx.response.status = 500;
    }
  }
  async onStopGet(ctx) {
      try{
          bindings.stop()
          ctx.body="Stopping";
      } catch(err){
          ctx.body = `There was an internal service error ${err}`;
          ctx.response.status = 500;
      }
  }
}