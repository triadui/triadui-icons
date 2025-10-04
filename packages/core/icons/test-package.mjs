#!/usr/bin/env node

/**
 * Test script to verify @triadui/icons package works correctly
 * Run with: node test-package.mjs
 */

console.log('🧪 Testing @triadui/icons package...\n');

// Test 1: ESM Import
console.log('✅ Test 1: ESM Import');
try {
  const pkg = await import('./dist/triadui-icons.mjs');
  console.log('   - Icon component:', pkg.Icon ? '✓' : '✗');
  console.log('   - Exports:', Object.keys(pkg).join(', '));
} catch (error) {
  console.error('   ✗ Failed:', error.message);
}

// Test 2: Check dist files
console.log('\n✅ Test 2: Dist Files');
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const files = [
  'dist/triadui-icons.mjs',
  'dist/triadui-icons.cjs',
  'dist/triadui-icons.umd.js',
  'dist/style.css',
  'dist/triadui-icons.mjs.map',
  'dist/triadui-icons.cjs.map',
  'dist/triadui-icons.umd.js.map',
];

files.forEach(file => {
  const exists = existsSync(join(__dirname, file));
  console.log(`   - ${file}: ${exists ? '✓' : '✗'}`);
});

// Test 3: Check documentation
console.log('\n✅ Test 3: Documentation');
const docs = [
  'README.md',
  'QUICKSTART.md',
  'INTEGRATION.md',
  'CHANGELOG.md',
  'SUMMARY.md',
  'examples/javascript-examples.jsx',
  'examples/nextjs-app-router.jsx',
  'examples/nextjs-pages-router.jsx',
];

docs.forEach(doc => {
  const exists = existsSync(join(__dirname, doc));
  console.log(`   - ${doc}: ${exists ? '✓' : '✗'}`);
});

// Test 4: Package.json validation
console.log('\n✅ Test 4: Package.json');
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'));

console.log('   - Name:', packageJson.name);
console.log('   - Version:', packageJson.version);
console.log('   - Main (CJS):', packageJson.main);
console.log('   - Module (ESM):', packageJson.module);
console.log('   - Types:', packageJson.types);
console.log('   - Exports defined:', packageJson.exports ? '✓' : '✗');
console.log('   - Keywords include "javascript":', packageJson.keywords.includes('javascript') ? '✓' : '✗');
console.log('   - Keywords include "nextjs":', packageJson.keywords.includes('nextjs') ? '✓' : '✗');

console.log('\n🎉 Testing complete!\n');
console.log('Next steps:');
console.log('1. npm run build:lib  - Build the package');
console.log('2. npm link           - Link locally for testing');
console.log('3. Test in Next.js    - Create a test Next.js app');
console.log('4. npm publish        - Publish to npm when ready');
