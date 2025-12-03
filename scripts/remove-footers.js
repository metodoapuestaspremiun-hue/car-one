const fs = require('fs');
const path = require('path');

// List of service pages to update
const servicePages = [
  'sistema-de-transmision/page.tsx',
  'sistema-de-direccion/page.tsx',
  'sistema-aire-acondicionado/page.tsx',
  'neumaticos/page.tsx',
  'mantenimiento-preventivo/page.tsx',
  'lubricantes/page.tsx',
  'gestion-de-flotas/page.tsx',
  'frenos/page.tsx',
  'enderezada-pintura/page.tsx',
  'baterias/page.tsx',
  'almacen-repuestos-lubricantes/page.tsx'
];

const basePath = path.join(__dirname, '..', 'app', 'servicios');

servicePages.forEach(page => {
  const filePath = path.join(basePath, page);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the footer section including the comment
    const newContent = content.replace(
      /\s*\{\/\*\s*Footer\s*\*\/}\s*<footer[\s\S]*?<\/footer>/g,
      ''
    );
    
    fs.writeFileSync(filePath, newContent);
    console.log(`✓ Updated: ${page}`);
  } catch (error) {
    console.error(`Error updating ${page}:`, error.message);
  }
});

console.log('\nAll service pages have been updated to remove individual footers.');
