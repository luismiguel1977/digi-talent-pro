const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const sourceIcon = 'Entrevistas-Icono.png';
const androidResDir = path.join('android', 'app', 'src', 'main', 'res');

const iconSizes = [
    { name: 'mipmap-mdpi', size: 48 },
    { name: 'mipmap-hdpi', size: 72 },
    { name: 'mipmap-xhdpi', size: 96 },
    { name: 'mipmap-xxhdpi', size: 144 },
    { name: 'mipmap-xxxhdpi', size: 192 }
];

async function generateIcons() {
    try {
        const image = await Jimp.read(sourceIcon);

        for (const sizeInfo of iconSizes) {
            const variants = ['ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png'];

            for (const variant of variants) {
                const destPath = path.join(androidResDir, sizeInfo.name, variant);
                console.log(`Generating ${variant} for ${sizeInfo.name} (${sizeInfo.size}x${sizeInfo.size})...`);

                await image
                    .clone()
                    .resize(sizeInfo.size, sizeInfo.size)
                    .writeAsync(destPath);
            }
        }

        console.log('✅ Icons generated successfully!');
    } catch (error) {
        console.error('❌ Error generating icons:', error);
        process.exit(1);
    }
}

generateIcons();
