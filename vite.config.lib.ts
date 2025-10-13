import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-types',
      async closeBundle() {
        // This ensures types are generated after the build
        const { execSync } = await import('child_process');
        execSync('tsc --emitDeclarationOnly --project tsconfig.build.json', { stdio: 'inherit' });
      }
    }
  ],
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
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TriadUIIcons',
      fileName: (format) => `triadui-icons.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        exports: 'named'
      },
      preserveEntrySignatures: 'strict'
    },
    sourcemap: true,
    emptyOutDir: true
  }
})