import mount from 'koa-mount';
import Koa from 'koa';
import serve from 'koa-static';
import {KoaSass} from '@jrg/koa-sass';

import {__dirname} from './unclean.mjs';
import {Main} from './main/index.mjs';
import {Movement} from './movement/index.mjs';



const main = new Main();
const movement = new Movement();

const app = new Koa();
const stylesApp = new Koa();

// TODO: Move to index.mjs in styles folder
const sass = new KoaSass({
  prefix: 'global',
  loadPaths: [
    "node_modules"
  ]
});

stylesApp.use(sass.koaMiddleware);
stylesApp.use(serve('styles'));

const setStaticHeaders = (res) => {
    res.setHeader('content-type', 'application/javascript')
}

const staticOptions = {
    setHeaders: setStaticHeaders
}
app.use(mount('/', main.app))
   .use(mount('/movement', movement.app))
   .use(mount('/styles', stylesApp))
   .use(mount('/js', serve(`${__dirname}/global/scripts`, staticOptions)))
   .use(
     mount(
       '/jrg',
       serve(
         `${__dirname}/node_modules/@jrg`, staticOptions
       )
     )
   )
   .use(mount('/material', serve(`${__dirname}/node_modules/@material`)))
   .listen(3001, ()=>{
     console.log(`The server is running`);
   });

