import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TriadUIIcons',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format: string) => {
        if (format === 'es') return 'triadui-icons.mjs'
        if (format === 'cjs') return 'triadui-icons.cjs'
        return 'triadui-icons.umd.js'
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        exports: 'named',
        // Preserve modules for better tree-shaking
        preserveModules: false,
        // Ensure CSS is extracted to separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'styles.css'
          return assetInfo.name || 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Generate sourcemaps
    sourcemap: true,
    // Ensure CSS is bundled as separate file
    cssCodeSplit: true,
    // Target modern browsers and Node.js
    target: ['es2020', 'node16'],
    // Minify for production
    minify: 'esbuild',
    // Copy CSS to dist
    outDir: 'dist'
  }
})