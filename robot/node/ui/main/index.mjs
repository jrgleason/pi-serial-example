import Pug from 'koa-pug';
import path from 'path';

import { SubRoute } from '../util/SubRoute.mjs';
import { __dirname } from '../unclean.mjs';

const viewPath = path.resolve(__dirname, './main/views');
const ROBOT_NAME = process.env.ROBOT_NAME || "Your Robot";

const pug = new Pug({
  viewPath,
});

export class Main extends SubRoute {
  constructor() {
    super();
    this.setRoute('get', '/', this.onIndexGet.bind(this));
  }
  async onIndexGet(ctx) {
      ctx.body = await pug.render('index', {
        name: ROBOT_NAME
      }, true);
  }
}