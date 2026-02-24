const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const sites = [
    { url: 'https://taskflowrq.vercel.app/', name: 'taskflowrq' }
];

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const outputDir = path.join(__dirname, 'public', 'images', 'portfolio');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const site of sites) {
        console.log(`Starting screenshot for ${site.name}...`);
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });
        try {
            await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
            await page.screenshot({ path: path.join(outputDir, `${site.name}.png`) });
            console.log(`Saved screenshot for ${site.name}`);
        } catch (error) {
            console.error(`Error taking screenshot for ${site.name}:`, error);
        }
        await page.close();
    }

    await browser.close();
    console.log('All done!');
})();
