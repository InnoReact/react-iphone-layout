import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, tsconfigPath: './tsconfig.json' }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'React-iPhone-Layout',
      fileName: (format) => `iphone-layout.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        banner: '"use client";',
        interop: 'auto',
      },
    },
  },
  assetsInclude: ['/*.png'],
});
