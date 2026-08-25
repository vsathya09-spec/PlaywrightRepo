import test from '@playwright/test';
test('create individuals', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.getByLabel("username").fill('dilipkumar.rajendran@testleaf.com');
    await page.getByRole('button',{name: "Log In"}).click();
    await page.getByLabel("password").fill('TestLeaf@2025');
    await page.getByRole('button',{name: "Log In"}).click();
    console.log('Title:', await page.title());
    console.log('URL:', page.url());
    await page.getByRole('button',{name: "App Launcher"}).click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.getByPlaceholder("Search apps or items...").fill('service')
    await page.locator('//p[@title="Manage customer service with accounts, contacts, cases, and more"]').click();
    await page.locator('//a[@href="/lightning/o/Account/home"]').click();
    await page.getByRole('button',{name: "Accounts List"}).click();
    await page.locator('//a[@href="/001/e?sObjectName=Account&save_new_url=%2F001%2Fe&navigationLocation=LIST_VIEW"]').click();
    await page.getByRole('textbox',{name: "Account Name"}).fill('Test');
    await page.locator('//button[@name="SaveEdit"]').click();
    console.log('Toast message is displayed')
    await page.waitForTimeout(3000)









})