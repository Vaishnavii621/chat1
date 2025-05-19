// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     outDir: 'dist', // This is the default; ensure this matches your output directory
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
