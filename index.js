const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()
  await page.goto('https://baidu.com');
  await page.type('#kw','puppeteer',{delay:100})
  await page.click('#su')
  await page.waitFor(2000)
  await browser.close()
})();
