import test, { expect } from '@playwright/test';

test('learn playwright locators', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.getByAltText('logo').isVisible();
    await page.getByText('Username',{exact: true}).fill('democsr2');
    await page.getByText('Password',{exact: true}).fill('crmsfa' );
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name: 'CRM/SFA'}).click();
    await page.getByRole('link',{name: 'Leads'}).click();
})