const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

    try {
        await page.goto('https://webbullindia.com/', { waitUntil: 'networkidle2' });

        const menuStructure = await page.evaluate(() => {
            // Assume nav elements are often within <nav> or ul that represent main menus
            const extractMenu = (containerSelector) => {
                const items = [];
                const topLevel = document.querySelectorAll(containerSelector);
                topLevel.forEach(el => {
                    const text = el.innerText.trim().split('\n')[0]; // Get the main text, avoid entire dropdown text if combined
                    if (!text) return;

                    const data = { title: text.trim(), subItems: [] };
                    // Find potential dropdowns (like absolute ULs inside the LI)
                    const sublinks = el.querySelectorAll('ul li a');
                    sublinks.forEach(sub => {
                        const subText = sub.innerText.trim();
                        if (subText) data.subItems.push(subText);
                    });
                    // Deduplicate the subitems since main text might be inside or we might query too deeply
                    items.push(data);
                });
                return items;
            };

            // Let's try to find a typical header nav item list
            const navSelectors = [
                'header nav > ul > li',
                '.main-menu > ul > li',
                '#main-nav > ul > li',
                '.navbar-nav > li',
                '.nav > li'
            ];

            let result = [];
            for (const selector of navSelectors) {
                const res = extractMenu(selector);
                if (res.length > 0) {
                    result = res;
                    break;
                }
            }

            // If not found, just get all links in header
            if (result.length === 0) {
                const headerLinks = Array.from(document.querySelectorAll('header a')).map(a => a.innerText.trim()).filter(Boolean);
                return { rawLinks: Array.from(new Set(headerLinks)) };
            }

            return result;
        });

        console.log(JSON.stringify(menuStructure, null, 2));
    } catch (e) {
        console.error(e.message);
    } finally {
        await browser.close();
    }
})();
