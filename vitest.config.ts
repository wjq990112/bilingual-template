import { defineConfig } from 'vitest/config';
import rollupConfig from './rollup.config';

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: rollupConfig.plugins,
});
