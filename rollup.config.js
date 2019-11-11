import html from 'rollup-plugin-html';
import minify from 'rollup-plugin-minify-es';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

let fileName = 'myuw-app-styles';
let objName = 'MyUWAppStyles';

let plugins = {
  full: [
    resolve(),
    commonjs(),
    html({
      include: `src/*.html`,
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true
      }
    })
  ],
  min: [
    resolve(),
    commonjs(),
    html({
      include: `src/*.html`,
      htmlMinifierOptions: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        conservativeCollapse: true
      }
    }),
    minify({
      output: {
        wrap_iife: true
      }
    })
  ]
};

export default [
  {
    input: `src/${fileName}.js`,
    plugins: plugins.full.concat([babel({exclude: 'node_modules/**'})]),
    output: {
      file: `dist/${fileName}.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/${fileName}.js`,
    plugins: plugins.min.concat([babel({exclude: 'node_modules/**'})]),
    output: {
      file: `dist/${fileName}.min.js`,
      name: objName,
      format: 'iife'
    }
  },
  {
    input: `src/${fileName}.js`,
    plugins: plugins.full,
    output: {
      file: `dist/${fileName}.mjs`,
      name: objName,
      format: 'es'
    }
  },
  {
    input: `src/${fileName}.js`,
    plugins: plugins.min,
    output: {
      file: `dist/${fileName}.min.mjs`,
      name: objName,
      format: 'es'
    }
  },
];
