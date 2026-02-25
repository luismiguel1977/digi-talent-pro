const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const sourceIcon = 'Entrevistas-Icono.png';
const destDir = path.join('assets', 'icons');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

async function generatePwaIcons() {
    try {
        console.log('Reading source icon...');
        const image = await Jimp.read(sourceIcon);

        const sizes = [192, 512];

        for (const size of sizes) {
            const fileName = `icon-${size}x${size}.png`;
            const destPath = path.join(destDir, fileName);
            
            console.log(`Generating ${fileName}...`);
            await image
                .clone()
                .resize(size, size)
                .writeAsync(destPath);
        }

        console.log('✅ PWA Icons generated successfully!');
    } catch (error) {
        console.error('❌ Error generating icons:', error);
    }
}

generatePwaIcons();