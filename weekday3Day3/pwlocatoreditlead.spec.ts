import test, { expect } from '@playwright/test';
test('learn playwright locators', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByAltText('logo').isVisible();
    await page.getByText('Username',{exact: true}).fill('democsr2');
    await page.getByText('Password',{exact: true}).fill('crmsfa');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name: 'CRM/SFA'}).click();
    await page.getByRole('link',{name: 'Leads'}).click();
    await page.getByRole('link', { name: "Find Leads" }).click();
    await page.getByRole('textbox',{name:"First name:"}).fill('Sathya')
    await page.getByRole('button',{name: "Find Leads"}).click();
    await page.getByRole('link',{name: "10646"}).click();
    await page.getByRole('link',{name:"Edit"}).click();
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill('CTS');
    await page.locator('//input[@id="updateLeadForm_annualRevenue"]').fill('7000');
    await page.locator('//input[@id="updateLeadForm_departmentName"]').fill('QA');
    await page.locator('//textarea[@id="updateLeadForm_description"]').fill('testing');
    await page.getByRole('button',{name: "Update"}).click();
    console.log('Page Title:', await page.title());
    await page.waitForTimeout(3000)
})