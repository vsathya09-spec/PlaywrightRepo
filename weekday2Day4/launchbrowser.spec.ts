import test, { chromium, firefox } from "@playwright/test";

test ('launch chromium browser',async()=>{
    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.com/')
    await page.waitForTimeout(3000)
    console.log(await page.title());
    
})