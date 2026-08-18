import test from "@playwright/test";
test('launch chromium browser',async({page})=>
    {
    await page.goto('https://www.amazon.com/')
    await page.waitForTimeout(3000)
    
    })