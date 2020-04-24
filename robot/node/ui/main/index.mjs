import Pug from 'koa-pug';
import path from 'path';

import { SubRoute } from '../SubRoute.mjs';
import { __dirname } from '../unclean.mjs';

const viewPath = path.resolve(__dirname, './main/views');

const pug = new Pug({
  viewPath,
});

export class Main extends SubRoute {
  constructor() {
    super();
    this.todos = [];
    this.setRoute('get', '/', this.onIndexGet.bind(this));
  }
  async onIndexGet(ctx) {
      ctx.body = await pug.render('index', {
        name: process.env.ROBOT_NAME || "Your Robot"
      }, true);
  }
}