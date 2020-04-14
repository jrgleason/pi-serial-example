import mount from 'koa-mount';
import Koa from 'koa';
import serve from 'koa-static';
import {KoaSass} from '@jrg/koa-sass';

import {__dirname} from './unclean.mjs';
import {Main} from './main/Main.mjs';

const app = new Koa();
const main = new Main();
const stylesApp = new Koa();
// TODO: Move to index.mjs in styles folder
const sass = new KoaSass({
  prefix: 'global',
});

stylesApp.use(sass.koaMiddleware);
stylesApp.use(serve('styles'));

// app.use(mount('/ui', serve('./node_modules/@jrg/ubuntu-ui/dist')));
app.use(mount('/', main.app))
    .use(mount('/styles', stylesApp))
    .use(mount('/material', serve(`${__dirname}/node_modules/@material`)))
    .listen(3001, ()=>{
      console.log(`The server is running`);
    });
