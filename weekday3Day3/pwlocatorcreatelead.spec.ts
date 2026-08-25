import test, { expect } from '@playwright/test';
test('learn playwright locators', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByAltText('logo').isVisible();
    await page.getByText('Username',{exact: true}).fill('democsr2');
    await page.getByText('Password',{exact: true}).fill('crmsfa' );
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name: 'CRM/SFA'}).click();
    await page.getByRole('link',{name: 'Leads'}).click();
    await page.getByRole('link',{name :"Create Lead"}).click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf');
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Sathya')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('Priya')
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Mrs.')
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('QA Engineer')
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('50000')
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('Testing')
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('1234567890')
    await page.locator('//input[@name="submitButton"]').click();
    console.log('Page Title:', await page.title());
    await page.waitForTimeout(3000)
})