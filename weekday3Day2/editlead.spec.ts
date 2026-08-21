import test from '@playwright/test';
test('edit leads', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill('democsr2');
    await page.locator('[type="password"]').fill('crmsfa');
    await page.locator('[class="decorativeSubmit"]').click();
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.locator('[id="createLeadForm_companyName"]').fill('TestLeaf');
    await page.locator('[id="createLeadForm_firstName"]').fill('Dilip');
    await page.locator('[id="createLeadForm_lastName"]').fill('Kumar');
    await page.locator('[name="submitButton"]').click();
    await page.locator('//a[text()="Modifier"]').click();
    await page.locator('//input[@name="companyName"]').fill('google')
    await page.locator('input[value="Update"]').click();
    await page.waitForTimeout(3000)
})