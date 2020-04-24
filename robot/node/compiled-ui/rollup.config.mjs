import resolve from '@rollup/plugin-node-resolve';
import pug from 'rollup-plugin-pug';
import path from 'path';
import SassShadow from '@jrg/rollup-sass-shadow';

import pkg from './package.json';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const shadow = new SassShadow(__dirname);

const UMD = {
    input: pkg.src,
    plugins: [
        shadow.plugin,
        resolve(),
        pug()
    ],
    external: ['ms'],
    output: [
      {
        name: 'jackiergleason',
        file: pkg.browser,
        format: 'umd',
      },
    ]
};

export default [UMD];