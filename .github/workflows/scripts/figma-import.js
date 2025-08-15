require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;
const ASSETS_DIR = path.join(__dirname, '../public/assets');

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
    console.error('Please set the FIGMA_TOKEN and FIGMA_FILE_ID environment variables.');
    process.exit(1);
}

if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

async function fetchAssets() {
    const config = {
        headers: {
            'X-Figma-Token': FIGMA_TOKEN,
        },
    };

    try {
        const response = await axios.get(`https://api.figma.com/v1/files/${FIGMA_FILE_ID}`, config);
        const frames = response.data.document.children;

        const exportableAssets = [];
        frames.forEach(frame => {
            if (frame.exportSettings) {
                frame.exportSettings.forEach(exportSetting => {
                    if (exportSetting.format === 'PNG') {
                        exportableAssets.push({
                            id: frame.id,
                            name: frame.name,
                            format: exportSetting.format,
                        });
                    }
                });
            }
        });

        for (const asset of exportableAssets) {
            await downloadAsset(asset.id, asset.name);
        }
    } catch (error) {
        console.error('Error fetching assets:', error);
    }
}

async function downloadAsset(assetId, assetName) {
    try {
        const url = `https://api.figma.com/v1/images/${FIGMA_FILE_ID}?ids=${assetId}&format=png`;
        const response = await axios.get(url, {
            headers: {
                'X-Figma-Token': FIGMA_TOKEN,
            },
        });

        const imageUrl = response.data.images[assetId];
        const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });

        const filePath = path.join(ASSETS_DIR, `${assetName}.png`);
        const writer = fs.createWriteStream(filePath);

        imageResponse.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Error downloading asset ${assetName}:`, error);
    }
}

fetchAssets();
