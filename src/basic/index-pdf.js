const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com/igorcezatte');
  await page.pdf({ path: 'gitpage.pdf', format: 'A4' });

  await browser.close();
})();