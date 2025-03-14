import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/image-uploader.ts',
      formats: ['es']
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
