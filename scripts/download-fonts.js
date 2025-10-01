#!/usr/bin/env node

/**
 * Download Script for Material Symbols Font Files
 * 
 * This script downloads the Material Symbols Rounded font files locally.
 * Run this script to get the woff2 and ttf font files for offline use.
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const FONT_URLS = {
  woff2: 'https://fonts.gstatic.com/s/materialsymbolsrounded/v215/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDB_Qb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOcbTCVpeRL2w5rwZu2rJELPJ8V.woff2',
  ttf: 'https://fonts.gstatic.com/s/materialsymbolsrounded/v215/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDB_Qb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOcbTCVpeRL2w5rwZu2rJELB.ttf'
};

const FONT_FILES = {
  woff2: 'MaterialSymbolsRounded[FILL,GRAD,opsz,wght].woff2',
  ttf: 'MaterialSymbolsRounded[FILL,GRAD,opsz,wght].ttf'
};

function downloadFont(url, filename) {
  return new Promise((resolve, reject) => {
    const fontsDir = path.join(__dirname, 'fonts');
    const filePath = path.join(fontsDir, filename);
    
    if (!fs.existsSync(fontsDir)) {
      fs.mkdirSync(fontsDir, { recursive: true });
    }
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadFonts() {
  console.log('Downloading Material Symbols Rounded font files...\n');
  
  try {
    await Promise.all([
      downloadFont(FONT_URLS.woff2, FONT_FILES.woff2),
      downloadFont(FONT_URLS.ttf, FONT_FILES.ttf)
    ]);
    
    console.log('\n✓ All font files downloaded successfully!');
    console.log('\nTo use local fonts:');
    console.log('1. Uncomment the @font-face declaration in fonts/material-symbols.css');
    console.log('2. Comment out the @import statement');
    console.log('3. Rebuild your project\n');
    
  } catch (error) {
    console.error('❌ Error downloading fonts:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  downloadFonts();
}

module.exports = { downloadFonts };