const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
        await page.goto('https://webbullindia.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

        const menuData = await page.evaluate(() => {
            const results = [];
            // The menu in typical bootstrap or modern themes is in a nav
            const mainItems = document.querySelectorAll('header nav ul > li, .main-navigation ul > li, .navbar-nav > li, #menu-main-menu > li');

            mainItems.forEach(li => {
                const anchor = li.querySelector('a');
                if (!anchor) return;
                const title = anchor.innerText.trim();
                if (!title) return;

                const dropdown = li.querySelectorAll('ul li a, .dropdown-menu li a, .sub-menu li a');
                const subItems = [];
                dropdown.forEach(sub => {
                    if (sub.innerText.trim()) {
                        subItems.push(sub.innerText.trim());
                    }
                });

                results.push({ title, subItems });
            });
            return results;
        });

        fs.writeFileSync('menu_data.json', JSON.stringify(menuData, null, 2));
        console.log("Menu data written to menu_data.json");

    } catch (e) {
        console.error(e.message);
    } finally {
        await browser.close();
    }
})();
