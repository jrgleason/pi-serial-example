import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';
export class SubRoute {
  constructor() {
    this.router = new Router();
    this.app = new Koa();
    this.app.use(this.router.middleware());
    this.app.use(koaBody());
  }
  setRoute(type, path, fun) {
    // TODO: Make more dynamic
    if (type === 'get') this.router.get(path, fun);
    else if (type === 'post') this.router.post(path, koaBody(), fun);
    else throw new Error(`There was no recognized type for route ${path}`);
  }
}