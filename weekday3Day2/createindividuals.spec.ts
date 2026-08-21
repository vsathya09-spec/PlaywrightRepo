import test from '@playwright/test';
test('create individuals', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[contains(@value, "Log In")]').click();
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[contains(@value, "Log In")]').click();
    await page.locator('//button[@title="App Launcher"]').click();
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Individuals');
    await page.locator('//span[@class="label-display"]').click();
    await page.getByRole('link',{name : 'Individuals' }).click
    await page.getByRole('button', { name: 'Individuals List' }).click()
    await page.getByRole('menuitem', {name : 'New Individual'}).click()
    await page.getByText('Last Name',{exact:true}).fill('priya')
    await page.locator('//span[text()="Save"]').click()
    await page.waitForTimeout(3000)
})