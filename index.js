const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({headless:false})
//   const page = await browser.newPage()
//   await page.goto('https://baidu.com')
//   await page.type('[name="wd"]','puppeteer',{delay:100})
//   await page.click('#su')
//   await page.waitFor(2000)
//   await browser.close()
// })();

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://search.bilibili.com/all?keyword=%E8%85%BF&from_source=banner_search')
  // await page.type('.search-keyword','腿',{delay:100})
  await page.waitFor(4000)
  await page.click('.nextPage')
  await page.waitFor(4000)

  await page.waitFor(4000)
  

  const data = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('img')];
    return imgs.map((img) => {
      return {
        src: img.src
      }
    });
  })
  console.log('-----',data)
})();