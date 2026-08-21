import test from '@playwright/test';
test('learn xpath locators', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[contains(@value, "Log In")]').click();
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[contains(@value, "Log In")]').click();
    console.log(await page.title());
    await page.waitForTimeout(5000);
})