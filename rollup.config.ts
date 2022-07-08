import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto',
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
});
