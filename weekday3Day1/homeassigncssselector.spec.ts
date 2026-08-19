import { test, expect } from '@playwright/test';

test('Create Lead using CSS Selectors', async ({ page }) => {

    // 1. Navigate to Leaftaps
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // 2. Enter Username
    await page.locator('[id="username"]').fill('democsr2');

    // 3. Enter Password
    await page.locator('[type="password"]').fill('crmsfa');

    // 4. Click Login
    await page.locator('[class="decorativeSubmit"]').click();

    // 5. Click CRM/SFA
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click();

    // 6. Click Leads
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();

    // 7. Click Create Lead
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

    // 9. Fill Company Name
    await page.locator('[id="createLeadForm_companyName"]').fill('TestLeaf');

    // 10. Fill First Name
    await page.locator('[id="createLeadForm_firstName"]').fill('Dilip');

    // 11. Fill Last Name
    await page.locator('[id="createLeadForm_lastName"]').fill('Kumar');

    // 12. Fill Salutation
    await page.locator('[id="createLeadForm_personalTitle"]').fill('Mr');

    // 13. Fill Title
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill('QA Tester');

    // 14. Fill Annual Revenue
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('500000');

    // 15. Fill Department
    await page.locator('[id="createLeadForm_departmentName"]').fill('Testing');

    // 16. Locate Source dropdown
    const sourceDropdown = page.locator('[id="createLeadForm_dataSourceId"]');

    // 17 & 18. Iterate through all Source dropdown options
    const options = await sourceDropdown.locator('option').all();

    for (const option of options) {

    const text = await option.textContent();

    console.log(text);

    if (text?.trim() === 'Employee') {
        await sourceDropdown.selectOption({ label: 'Employee' });
        break;
    }}

    // 19. Fill Phone Number
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('9876543210');

    // 20. Click Create Lead
    await page.locator('[name="submitButton"]').click();

    console.log('Lead created successfully');
});