import test from '@playwright/test';
test('learn xpath locators', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[contains(@value, "Log In")]').click();
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[contains(@value, "Log In")]').click();
    await page.locator('//button[@title="App Launcher"]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Sales');
    await page.locator('//p[@title="Manage your sales process with accounts, leads, opportunities, and more"]').click();
    await page.locator('//a[@title="Leads"]').click();
    const leaddropdown = page.locator('//a[@title="Leads"]/following::a[contains(@class,"slds-button slds-button_reset")]').first();
    await leaddropdown.click();
    await page.locator('//div[@class="menuItemsWrapper"]').all()
    await page.locator('//a[@title="New"]').click()
    await page.locator('//button[@aria-label="Salutation"]').click()
    await page.locator("[data-Value='Mrs.']").click()
    await page.locator('//input[@name="lastName"]').fill("rajendran")
    await page.locator('//input[@name="Company"]').fill('TestLeaf')
    await page.locator('//button[@name="SaveEdit"]').click()
    await page.waitForTimeout(3000)
})