import { test, expect } from '@playwright/test';

test('learn css selector', async ({ page }) => {

    // Open Salesforce
    await page.goto("https://login.salesforce.com/?locale=in");

    // Username - ID selector
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[id="Login"]').click();
    await page.waitForTimeout(3000);
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('[id="Login"]').click();
    console.log('Login button clicked');

    await page.waitForTimeout(3000);
});