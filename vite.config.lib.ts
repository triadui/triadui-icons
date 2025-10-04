import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@triadui/icons': resolve(__dirname, 'packages/core/icons/src/index.ts')
    }
  },
  optimizeDeps: {
    exclude: ['@triadui/icons']
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MuiIII',
      fileName: (format: string) => `mui-iii.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})