import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';
import ignoreImport from 'rollup-plugin-ignore-import';
import pkg from './package.json';
import { builtinModules } from 'module';

const deps = (d) => (d ? Object.keys(d) : []);

/** @type {import('rollup').RollupOptions} */
const config = {
  input: './index.ts',
  external: [
    ...builtinModules,
    ...deps(pkg.dependencies),
    ...deps(pkg.devDependencies)
  ]
};

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    ...config,
    plugins: [esbuild(), css()],
    output: [
      { file: 'dist/index.mjs', format: 'esm' },
      { file: 'dist/index.cjs', format: 'cjs' }
    ]
  },
  {
    ...config,
    plugins: [
      dts(),
      ignoreImport({
        extensions: ['.css']
      })
    ],
    output: [
      {
        file: 'dist/types/index.d.mts',
        format: 'esm'
      },
      {
        file: 'dist/types/index.d.cts',
        format: 'cjs'
      }
    ]
  }
];
